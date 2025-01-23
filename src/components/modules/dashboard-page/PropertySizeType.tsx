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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentProperty, setCurrentProperty] = useState({
    id: "",
    aana: "",
    dhur: "",
  });
  const [propertyToDelete, setPropertyToDelete] = useState("");

  const handleEdit = (id: string, aana: string, dhur: string) => {
    setCurrentProperty({ id, aana, dhur });
    console.log(`Editing property type with ID: ${id}`);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setPropertyToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    console.log(`Deleting property type with ID: ${propertyToDelete}`);
    setIsDeleteModalOpen(false);
  };

  const handleSave = () => {
    console.log(
      `Saving changes for ID: ${currentProperty.id},Aana: ${currentProperty.dhur}, Dhur: ${currentProperty.aana}`
    );
    // Add your logic to save the updated property type here
    setIsEditModalOpen(false);
  };

  return (
    <>
      <div className="space-y-5">
        <h1 className="desktop-lg:text-lg">Property Size Type</h1>
        <div>
          <Table className="max-w-[1000px] max-mobile-md:overflow-y-auto">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] desktop-lg:text-lg">
                  ID
                </TableHead>
                <TableHead className="w-[400px] text-center desktop-lg:text-lg">
                  Aana
                </TableHead>
                <TableHead className="w-[400px] text-center desktop-lg:text-lg">
                  Dhur
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
                    {propertyType.aana}
                  </TableCell>
                  <TableCell className="w-[400px] text-center desktop-lg:text-lg">
                    {propertyType.dhur}
                  </TableCell>
                  <TableCell className="w-[100px] text-center">
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
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="space-y-5 rounded-lg">
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
                onClick={() => setIsEditModalOpen(false)}
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

      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent className="flex flex-col gap-10 rounded-lg">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription className="">
              Are you sure you want to delete this property type?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="flex flex-row justify-between items-center w-full">
              <Button
                onClick={() => setIsDeleteModalOpen(false)}
                variant="outline"
                className="px-6"
              >
                Cancel
              </Button>
              <Button
                onClick={confirmDelete}
                variant="destructive"
                className="px-7"
              >
                Delete
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PropertySizeType;
