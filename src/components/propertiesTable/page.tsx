"use client";
import { Dispatch, SetStateAction, useEffect } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { PropertyApiResponse } from "./types";
import Loading from "@/components/elements/Loading";

interface PropertyTableProps {
  property: PropertyApiResponse[];
  setProperty: Dispatch<SetStateAction<PropertyApiResponse[]>>;
  fetchProperties: () => Promise<void>;
  isTableLoading: boolean;
}

const PropertyTable = ({
  property,
  setProperty,
  fetchProperties,
  isTableLoading,
}: PropertyTableProps) => {
  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="container mx-auto py-10">
      {isTableLoading ? (
        <Loading />
      ) : (
        <DataTable
          columns={columns(property, setProperty)}
          data={property.filter((prop) => prop !== undefined)}
        />
      )}
    </div>
  );
};
export default PropertyTable;
