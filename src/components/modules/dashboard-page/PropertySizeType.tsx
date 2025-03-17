"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
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
import { toast } from "sonner";
import Loading from "@/components/elements/Loading";

type PropertySizeType = {
  id: string;
  value: string;
  selectFieldData: string;
};

interface PropertySizeTypeProps {
  propertySizeType: Array<{
    id: string;
    value: string;
    selectFieldData: string;
  }>;
  setPropertySizeType: Dispatch<
    SetStateAction<
      Array<{ id: string; value: string; selectFieldData: string }>
    >
  >;
}

const PropertySizeType = ({
  propertySizeType,
  setPropertySizeType,
}: PropertySizeTypeProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  //for edit
  const [currentProperty, setCurrentProperty] = useState({
    id: "",
    value: "",
    selectFieldData: "",
  });
  const [propertyToDelete, setPropertyToDelete] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTableLoading, setIsTableLoading] = useState(true);

  useEffect(() => {
    // Fetch and display data
    async function fetchData() {
      setIsTableLoading(true);
      try {
        const res = await fetch("/estatein/api/addPropertySizeType");
        const result = await res.json();
        setPropertySizeType(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch property types");
      } finally {
        setIsTableLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleEdit = (id: string, value: string, selectFieldData: string) => {
    setCurrentProperty({ id, value, selectFieldData });
    setIsEditModalOpen(true);
  };

  const handleSave = async () => {
    setIsLoading(true);
    const updatedProperty = {
      id: currentProperty.id,
      value: currentProperty.selectFieldData, // Update value with selectFieldData
      selectFieldData: currentProperty.selectFieldData,
    };

    try {
      const response = await fetch("/estatein/api/addPropertySizeType", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProperty),
      });

      // const result = await response.json();

      if (response.ok) {
        setIsEditModalOpen(false);
        //update the ui
        setPropertySizeType((prev) =>
          prev.map((item) =>
            item.id === currentProperty.id
              ? {
                  ...item,
                  value: currentProperty.selectFieldData, // Sync value with selectFieldData
                  selectFieldData: currentProperty.selectFieldData,
                }
              : item
          )
        );
        toast.success("Property Size Type successfully updated");
      } else {
        toast.error("Error updating property size type");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating property size type");
    }

    setIsLoading(false);
    setIsEditModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setPropertyToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/estatein/api/addPropertySizeType", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: propertyToDelete }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsDeleteModalOpen(false);

        // Optionally update the UI by removing the deleted item
        setPropertySizeType((prev) =>
          prev.filter((item) => item.id !== propertyToDelete)
        );
        toast.success("Deleted successfully");
      } else {
        console.error("Error deleting:", data.message);
        toast.error("Error deleting");
      }
    } catch (error) {
      console.error("Failed to delete property:", error);
      toast.error("Failed to delete");
    }
    setIsLoading(false);
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div className="space-y-5">
        <h1 className="desktop-lg:text-xl">Property Size Type</h1>
        {isTableLoading ? (
          <div className="flex justify-center items-center h-40">
            <Loading />
          </div>
        ) : (
          <div>
            <Table className="max-w-[600px] max-mobile-md:overflow-y-auto">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] desktop-lg:text-lg">
                    S.N
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
                {propertySizeType.map((propertyType, index) => (
                  <TableRow key={propertyType.id}>
                    <TableCell className="w-[100px] desktop-lg:text-lg">
                      {/* {propertyType.id} */}
                      {index + 1}
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
                              propertyType.value,
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
        )}
      </div>

      {/*Edit Modal: Property Type */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="space-y-5 rounded-lg">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Edit Property Size Type</DialogTitle>
                <DialogDescription> </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  value={currentProperty.selectFieldData}
                  onChange={(e) =>
                    setCurrentProperty({
                      ...currentProperty,
                      selectFieldData: e.target.value,
                    })
                  }
                  placeholder="Enter property size type"
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
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Modal */}
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent className="flex flex-col gap-10 rounded-lg">
          {isLoading ? (
            <Loading />
          ) : (
            <>
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
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PropertySizeType;
