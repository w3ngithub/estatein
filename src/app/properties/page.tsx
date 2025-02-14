"use client";
import { Dispatch, SetStateAction, useEffect } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { PropertyApiResponse } from "./types";

interface PropertyTableProps {
  property: PropertyApiResponse[];
  setProperty: Dispatch<SetStateAction<PropertyApiResponse[]>>;
}

const PropertyTable = ({ property, setProperty }: PropertyTableProps) => {
  useEffect(() => {
    // Fetch and display data
    async function fetchData() {
      const res = await fetch("/estatein/api/addProperty");
      const result = await res.json();
      setProperty(result.data);
    }
    fetchData();
  }, [setProperty]);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={property} />
    </div>
  );
};
export default PropertyTable;
