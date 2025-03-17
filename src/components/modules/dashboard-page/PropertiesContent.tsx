"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import AddPropertyModal from "./AddPropertyModal";
import PropertyTable from "@/components/propertiesTable/page";
import { PropertyApiResponse } from "@/components/propertiesTable/types";

const PropertiesContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [property, setProperty] = useState<PropertyApiResponse[]>([]);
  const [isTableLoading, setIsTableLoading] = useState(true);

  // Add a fetch function that can be reused
  const fetchProperties = async () => {
    setIsTableLoading(true);
    try {
      const res = await fetch("/api/addProperty");
      const result = await res.json();
      if (result.data && Array.isArray(result.data)) {
        setProperty(result.data);
      }
    } catch (error) {
      console.error("Failed to fetch properties:", error);
    } finally {
      setIsTableLoading(false);
    }
  };

  // Fetch properties on component mount
  useEffect(() => {
    fetchProperties();
  }, []);

  const handleAddProperty = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="p-8 space-y-7 max-mobile-md:p-1 w-[100vw] mobile-lg:w-[85vw]">
      <h1 className="text-2xl">Properties</h1>
      <div className="flex flex-row items-center justify-end gap-5">
        <Button
          onClick={handleAddProperty}
          className="bg-purple-shade-60 hover:bg-purple-shade-d60 text-white"
        >
          Add Property
        </Button>
      </div>
      <div className="w-full overflow-x-auto">
        <PropertyTable
          property={property}
          setProperty={setProperty}
          fetchProperties={fetchProperties}
          isTableLoading={isTableLoading}
        />
      </div>

      {/* Add Property Modal */}
      <AddPropertyModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        property={property}
        setProperty={setProperty}
        fetchProperties={fetchProperties}
      />
    </div>
  );
};

export default PropertiesContent;
