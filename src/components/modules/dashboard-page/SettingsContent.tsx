"use client";
import { Button } from "@/components/ui/button";
import PropertyType from "./PropertyType";
import PropertySizeType from "./PropertySizeType";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import AddPropertySizeModal from "./AddPropertySizeModal";

const SettingsContent = () => {
  const [isModalOpenPropertySize, setIsModalOpenPropertySize] = useState(false);

  const handleAddPropertySize = () => {
    setIsModalOpenPropertySize(true);
  };

  return (
    <div className="p-8 space-y-7">
      <h1 className="text-2xl">Settings</h1>
      <div className="flex flex-row items-center justify-end gap-5">
        <Button className="bg-purple-shade-60 hover:bg-purple-shade-d60 text-white">
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
        <PropertyType />
      </div>
      <div>
        <PropertySizeType />
      </div>
      {/* Add Modal: Property Size Type */}
      <AddPropertySizeModal
        isModalOpenPropertySize={isModalOpenPropertySize}
        setIsModalOpenPropertySize={setIsModalOpenPropertySize}
      />

      <div></div>
    </div>
  );
};

export default SettingsContent;
