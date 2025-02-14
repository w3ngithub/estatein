"use client";
import { Dispatch, SetStateAction, useEffect } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { PropertyApiResponse } from "./types";

interface PropertyTableProps {
  property: PropertyApiResponse[];
  setProperty: Dispatch<SetStateAction<PropertyApiResponse[]>>;
  fetchProperties: () => Promise<void>;
}

const PropertyTable = ({
  property,
  setProperty,
  fetchProperties,
}: PropertyTableProps) => {
  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={property.filter((prop) => prop !== undefined)}
      />
    </div>
  );
};
export default PropertyTable;
