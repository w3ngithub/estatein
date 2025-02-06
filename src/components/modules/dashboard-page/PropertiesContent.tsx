import { Button } from "@/components/ui/button";
import { useState } from "react";
import AddPropertyModal from "./AddPropertyModal";
import PropertyTable from "@/app/properties/page";

const PropertiesContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProperty = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="p-8 space-y-7 max-mobile-md:p-1 w-[85vw]">
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
        <PropertyTable />
      </div>

      {/* Add Property Modal */}
      <AddPropertyModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default PropertiesContent;
