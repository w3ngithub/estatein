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
import propertySizeType from "@/utilityComponents/dashboardPage/propertySizeTypeData.json";

const PropertySizeType = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentProperty, setCurrentProperty] = useState({ id: "", name: "" });
  const [propertyToDelete, setPropertyToDelete] = useState("");

  const handleEdit = (id: string, name: string) => {
    setCurrentProperty({ id, name });
    console.log(`Editing property type with ID: ${id}`);
    setIsEditModalOpen(true);
  };

  const handleSave = () => {
    console.log(
      `Saving changes for ID: ${currentProperty.id}, Name: ${currentProperty.name}`
    );
    // Add your logic to save the updated property type here
    setIsEditModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setPropertyToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    console.log(`Deleting property type with ID: ${propertyToDelete}`);
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div className="space-y-5">
        <h1 className="desktop-lg:text-xl">Property Size Type</h1>
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
              {propertySizeType.map((propertyType) => (
                <TableRow key={propertyType.id}>
                  <TableCell className="w-[100px] desktop-lg:text-lg">
                    {propertyType.id}
                  </TableCell>
                  <TableCell className="w-[400px] text-center desktop-lg:text-lg">
                    {propertyType.selectFieldData}
                  </TableCell>
                  <TableCell className="w-[100px] text-center desktop-lg:text-lg">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          handleEdit(
                            propertyType.id,
                            propertyType.selectFieldData
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

      {/*Edit Modal: Property Type */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="space-y-5 rounded-lg">
          <DialogHeader>
            <DialogTitle>Edit Property Size Type</DialogTitle>
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

      {/* Delete Modal */}
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
