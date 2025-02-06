"use client";

import { PropertyListingSchema } from "@/schema/property-listing-form";
import { ColumnDef } from "@tanstack/react-table";

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
    header: "villaName",
  },
  {
    accessorKey: "keyFeatures",
    header: "keyFeatures",
  },
  {
    accessorKey: "description",
    header: "description",
  },
  {
    accessorKey: "pillName",
    header: "pillName",
  },
  {
    accessorKey: "location",
    header: "location",
  },
  {
    accessorKey: "buildYear",
    header: "buildYear",
  },
  {
    accessorKey: "totalBedRoom",
    header: "totalBedRoom",
  },
  {
    accessorKey: "totalBathRoom",
    header: "totalBathRoom",
  },
  {
    accessorKey: "totalArea",
    header: "totalArea",
  },
  {
    accessorKey: "areaUnit",
    header: "areaUnit",
  },
  {
    accessorKey: "propertyType",
    header: "propertyType",
  },
  {
    accessorKey: "propertyTransferTax",
    header: "propertyTransferTax",
  },
  {
    accessorKey: "homeInspectionFee",
    header: "homeInspectionFee",
  },
  {
    accessorKey: "propertyInsurance",
    header: "propertyInsurance",
  },
  {
    accessorKey: "mortgageFee",
    header: "mortgageFee",
  },
  {
    accessorKey: "propertyTax",
    header: "propertyTax",
  },
  {
    accessorKey: "additionalFee",
    header: "additionalFee",
  },
  {
    accessorKey: "homeOwnersAssociationFee",
    header: "homeOwnersAssociationFee",
  },
  {
    accessorKey: "downPayment",
    header: "downPayment",
  },
  {
    accessorKey: "monthlyPropertyInsurance",
    header: "monthlyPropertyInsurance",
  },
  {
    accessorKey: "coverImage",
    header: "coverImage",
  },
  {
    accessorKey: "multipleImages",
    header: "multipleImages",
  },
];
