import { useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import discoverProperty from "@/utilityComponents/dashboardPage/discoverProperty.json";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Loading from "@/components/elements/Loading";

const PropertyTable = () => {
  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={discoverProperty} />
      </div>
    </>
  );
};
export default PropertyTable;
