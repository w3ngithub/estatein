"use client";
import { Button } from "@/components/ui/button";
import PropertyType from "./PropertyType";
import PropertySizeType from "./PropertySizeType";
import { useState } from "react";
import AddPropertySizeModal from "./AddPropertySizeModal";
import AddPropertyTypeModal from "./AddPropertyTypeModal";

const SettingsContent = () => {
  const [isModalOpenPropertyType, setIsModalOpenPropertyType] = useState(false);
  const [isModalOpenPropertySize, setIsModalOpenPropertySize] = useState(false);
  const [propertyType, setPropertyType] = useState<PropertyType[]>([]);
  const [propertySizeType, setPropertySizeType] = useState<PropertySizeType[]>(
    []
  );

  const handleAddPropertyType = () => {
    setIsModalOpenPropertyType(true);
  };

  const handleAddPropertySize = () => {
    setIsModalOpenPropertySize(true);
  };

  return (
    <div className="p-8 space-y-7 max-mobile-md:p-1">
      <h1 className="text-2xl">Settings</h1>
      <div className="flex flex-row items-center justify-end gap-5">
        <Button
          onClick={handleAddPropertyType}
          className="bg-purple-shade-60 hover:bg-purple-shade-d60 text-white"
        >
          Add Property Type
        </Button>
        <Button
          onClick={handleAddPropertySize}
          className="bg-purple-shade-60 hover:bg-purple-shade-d60 text-white"
        >
          Add Property Size Type
        </Button>
      </div>
      <div>
        <PropertyType
          propertyType={propertyType}
          setPropertyType={setPropertyType}
        />
      </div>
      <div>
        <PropertySizeType
          propertySizeType={propertySizeType}
          setPropertySizeType={setPropertySizeType}
        />
      </div>
      {/* Add Property Type Modal */}
      <AddPropertyTypeModal
        isModalOpenPropertyType={isModalOpenPropertyType}
        setIsModalOpenPropertyType={setIsModalOpenPropertyType}
        propertyTypeData={propertyType}
        setPropertyTypeData={setPropertyType}
      />

      {/* Add Property Size Type Modal */}
      <AddPropertySizeModal
        isModalOpenPropertySize={isModalOpenPropertySize}
        setIsModalOpenPropertySize={setIsModalOpenPropertySize}
        propertyTypeSizeData={propertySizeType}
        setPropertyTypeSizeData={setPropertySizeType}
      />
    </div>
  );
};

export default SettingsContent;
