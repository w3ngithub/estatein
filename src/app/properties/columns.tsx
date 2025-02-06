"use client";

import { Button } from "@/components/ui/button";
import { PropertyListingSchema } from "@/schema/property-listing-form";
import { ColumnDef } from "@tanstack/react-table";
import { Edit2, Trash } from "lucide-react";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

export const columns: ColumnDef<PropertyListingSchema>[] = [
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
                <li key={item.id}>{item.name}</li>;
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
      return (
        <>
          {images.map((imgUrl, index: number) => {
            return (
              <div key={index} className="flex flex-row gap-2">
                <div className="relative size-16">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH + `${imgUrl}`}`}
                    alt="house"
                    width={100}
                    height={100}
                    className="absolute h-full w-full top-0 left-0 object-cover object-center rounded-lg"
                  />
                </div>
              </div>
            );
          })}
        </>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: () => {
      return (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => console.log("edit")}
            className="text-blue-500 hover:text-blue-700"
          >
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => console.log("delete")}
            className="text-red-500 hover:text-red-700"
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
];
