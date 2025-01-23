"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit2, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const propertyTypeData = [
  {
    id: "1",
    aana: "12",
    dhur: "20",
  },
  {
    id: "2",
    aana: "10",
    dhur: "10",
  },
  {
    id: "3",
    aana: "3",
    dhur: "4",
  },
  {
    id: "4",
    aana: "100",
    dhur: "200",
  },
];

const PropertySizeType = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProperty, setCurrentProperty] = useState({
    id: "",
    aana: "",
    dhur: "",
  });

  const handleEdit = (id: string, aana: string, dhur: string) => {
    setCurrentProperty({ id, aana, dhur });
    console.log(`Editing property type with ID: ${id}`);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    console.log(
      `Saving changes for ID: ${currentProperty.id},Aana: ${currentProperty.dhur}, Dhur: ${currentProperty.aana}`
    );
    // Add your logic to save the updated property type here
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    console.log(`Deleting property type with ID: ${id}`);
  };

  return (
    <>
      <div className="space-y-5">
        <h1 className="text-lg">Property Size Type</h1>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Aana</TableHead>
                <TableHead>Dhur</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {propertyTypeData.map((propertyType) => (
                <TableRow key={propertyType.id}>
                  <TableCell className="font-medium">
                    {propertyType.id}
                  </TableCell>
                  <TableCell>{propertyType.aana}</TableCell>
                  <TableCell>{propertyType.dhur}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          handleEdit(
                            propertyType.id,
                            propertyType.aana,
                            propertyType.dhur
                          )
                        }
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(propertyType.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/*Edit Modal: Property Size Type */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="space-y-5">
          <DialogHeader>
            <DialogTitle>Edit Property Type</DialogTitle>
            <DialogDescription> </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex flex-row items-center gap-5">
              <h1>Aana:</h1>
              <Input
                type="number"
                value={currentProperty.aana}
                onChange={(e) =>
                  setCurrentProperty({
                    ...currentProperty,
                    aana: e.target.value,
                  })
                }
                placeholder="Enter property type"
                className="h-14"
              />
            </div>
            <div className="flex flex-row items-center gap-5">
              <h1>Dhur:</h1>
              <Input
                value={currentProperty.dhur}
                onChange={(e) =>
                  setCurrentProperty({
                    ...currentProperty,
                    dhur: e.target.value,
                  })
                }
                placeholder="Enter property type"
                className="h-14"
              />
            </div>
          </div>
          <DialogFooter>
            <div className="flex flex-row justify-between items-center">
              <Button
                onClick={() => setIsModalOpen(false)}
                variant="destructive"
                className="px-6"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                className="bg-purple-shade-60 hover:bg-purple-shade-d60 text-white px-7"
              >
                Save
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PropertySizeType;
