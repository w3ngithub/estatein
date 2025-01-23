import { Button } from "@/components/ui/button";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit2, Trash } from "lucide-react";

const propertyTypeData = [
  {
    id: "1",
    name: "Rental",
  },
  {
    id: "2",
    name: "Owned",
  },
  {
    id: "3",
    name: "1 BHK",
  },
  {
    id: "4",
    name: "2 BHK",
  },
];

const SettingsContent = () => {
  const handleEdit = (id: string) => {
    console.log(`Editing property type with ID: ${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Deleting property type with ID: ${id}`);
  };

  return (
    <div className="p-8 space-y-5">
      <h1 className="text-2xl">Settings</h1>
      <div className="flex flex-row items-center justify-end gap-5">
        <Button className="bg-purple-shade-60 hover:bg-purple-shade-d60 text-white">
          Add Property Type
        </Button>
        <Button className="bg-purple-shade-60 hover:bg-purple-shade-d60 text-white">
          Add Property Size Type
        </Button>
      </div>
      <div className="space-y-5">
        <h1 className="text-lg">Property Type</h1>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {propertyTypeData.map((propertyType) => (
                <TableRow key={propertyType.id}>
                  <TableCell className="font-medium">
                    {propertyType.id}
                  </TableCell>
                  <TableCell>{propertyType.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(propertyType.id)}
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
      <div></div>
    </div>
  );
};

export default SettingsContent;
