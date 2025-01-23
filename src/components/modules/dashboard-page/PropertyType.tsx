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
    name: "Rental",
  },
  {
    id: "2",
    name: "Owned",
  },
  {
    id: "3",
    name: "1 BHK",
  },
  {
    id: "4",
    name: "2 BHK",
  },
];

const PropertyType = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProperty, setCurrentProperty] = useState({ id: "", name: "" });

  const handleEdit = (id: string, name: string) => {
    setCurrentProperty({ id, name });
    console.log(`Editing property type with ID: ${id}`);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    console.log(
      `Saving changes for ID: ${currentProperty.id}, Name: ${currentProperty.name}`
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
        <h1 className="desktop-lg:text-xl">Property Type</h1>
        <div>
          <Table className="max-w-[600px] max-mobile-md:overflow-y-auto">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] desktop-lg:text-lg">
                  ID
                </TableHead>
                <TableHead className="w-[400px] text-center desktop-lg:text-lg">
                  Name
                </TableHead>
                <TableHead className="w-[100px] text-center desktop-lg:text-lg">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {propertyTypeData.map((propertyType) => (
                <TableRow key={propertyType.id}>
                  <TableCell className="w-[100px] desktop-lg:text-lg">
                    {propertyType.id}
                  </TableCell>
                  <TableCell className="w-[400px] text-center desktop-lg:text-lg">
                    {propertyType.name}
                  </TableCell>
                  <TableCell className="w-[100px] text-center desktop-lg:text-lg">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          handleEdit(propertyType.id, propertyType.name)
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

      {/*Edit Modal: Property Type */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="space-y-5 rounded-lg">
          <DialogHeader>
            <DialogTitle>Edit Property Type</DialogTitle>
            <DialogDescription> </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              value={currentProperty.name}
              onChange={(e) =>
                setCurrentProperty({ ...currentProperty, name: e.target.value })
              }
              placeholder="Enter property type"
              className="h-14"
            />
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

export default PropertyType;
