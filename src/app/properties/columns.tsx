"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ColumnDef } from "@tanstack/react-table";
import { Edit2, Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { PropertyApiResponse } from "./types";
import Loading from "@/components/elements/Loading";
import { toast } from "sonner";
import AddPropertyModal from "@/components/modules/dashboard-page/AddPropertyModal";

export const columns: ColumnDef<PropertyApiResponse>[] = [
  {
    accessorKey: "villaName",
    header: "Property Name",
  },
  {
    accessorKey: "keyFeatures",
    header: "Key Features",
    cell: ({ row }) => {
      const keyFeatures = row.original.keyFeatures;
      return (
        <ol className="text-center">
          {keyFeatures.map((item, index) => {
            return (
              <div key={item.id} className="flex flex-row gap-2">
                <p>{index + 1})</p>
                <li key={item.id}>{item.name}</li>
              </div>
            );
          })}
        </ol>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const desc = row.original.description;
      return <span className="line-clamp-3">{desc}</span>;
    },
  },
  {
    accessorKey: "pillName",
    header: "Pill Name",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "buildYear",
    header: "Build Year",
  },
  {
    accessorKey: "totalBedRoom",
    header: "BedRoom",
  },
  {
    accessorKey: "totalBathRoom",
    header: "BathRoom",
  },
  {
    accessorKey: "totalArea",
    header: "Area",
  },
  {
    accessorKey: "areaUnit",
    header: "Area Unit",
  },
  {
    accessorKey: "propertyType",
    header: "Property Type",
  },
  {
    accessorKey: "propertyTransferTax",
    header: "Property Transfer Tax",
  },
  {
    accessorKey: "homeInspectionFee",
    header: "Home Inspection Fee",
  },
  {
    accessorKey: "propertyInsurance",
    header: "Property Insurance",
  },
  {
    accessorKey: "mortgageFee",
    header: "Mortgage Fee",
  },
  {
    accessorKey: "propertyTax",
    header: "Property Tax",
  },
  {
    accessorKey: "additionalFee",
    header: "Additional Fee",
  },
  {
    accessorKey: "homeOwnersAssociationFee",
    header: "Home Owners Association Fee",
  },
  {
    accessorKey: "downPayment",
    header: "Down Payment",
  },
  {
    accessorKey: "monthlyPropertyInsurance",
    header: "Monthly Property Insurance",
  },
  {
    accessorKey: "coverImage",
    header: "Cover Image",
    cell: ({ row }) => {
      const image = row.original.coverImage;
      return (
        <div className="relative size-16">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH + `${image}`}`}
            alt="house"
            width={100}
            height={100}
            className="absolute h-full w-full top-0 left-0 object-cover object-center rounded-lg"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "multipleImages",
    header: "Multiple Images",
    cell: ({ row }) => {
      const images = row.original.multipleImages;
      const [open, setOpen] = useState(false);

      return (
        <div className="flex flex-col items-start gap-2">
          {/* Show only the first image */}
          {images.length > 0 && (
            <div className="relative size-16">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH + `${images[0]}`}`}
                alt="house"
                width={100}
                height={100}
                className="absolute h-full w-full top-0 left-0 object-cover object-center rounded-lg"
              />
            </div>
          )}

          {/* Show "View More" button if there are multiple images */}
          {images.length > 1 && (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  View....
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg p-4 rounded-lg">
                <DialogHeader>
                  <DialogTitle className="text-2xl py-4">Images</DialogTitle>
                  <DialogDescription> </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-2">
                  {images.map((imgUrl, index) => (
                    <div key={index} className="relative size-24 my-5">
                      <Image
                        src={`${
                          process.env.NEXT_PUBLIC_BASE_PATH + `${imgUrl}`
                        }`}
                        alt={`house-${index}`}
                        width={100}
                        height={100}
                        className="absolute h-full w-full top-0 left-0 object-cover object-center rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const id = row.original.id;
      const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
      const [isLoading, setIsLoading] = useState<boolean>(false);
      const [propertyToDelete, setPropertyToDelete] = useState<string | null>(
        null
      );

      // for edit
      const [propertyToEdit, setPropertyToEdit] = useState<string | null>(null);
      const [isModalOpen, setIsModalOpen] = useState(false);

      const handleDelete = (id: string) => {
        setPropertyToDelete(id);
        setIsDeleteModalOpen(true);
      };

      const confirmDelete = async () => {
        if (!propertyToDelete) return;
        setIsLoading(true);
        try {
          const response = await fetch("/estatein/api/addProperty", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: propertyToDelete }),
          });

          const data = await response.json();
          if (response.ok) {
            console.log("Deleted successfully:", data);
            setIsDeleteModalOpen(false);
            toast.success("Deleted successfully");
            // You might want to refresh your data here
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
        setPropertyToDelete(null);
      };

      const handleEdit = (id: string) => {
        console.log(id, "mmmmmmmmmm");
        setPropertyToEdit(id);
        setIsModalOpen(true);
      };

      return (
        <>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleEdit(id)}
              className="text-blue-500 hover:text-blue-700"
            >
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleDelete(id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>

          {/* edit modal */}
          <AddPropertyModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />

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
                      Are you sure you want to delete this property?
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
    },
  },
];
