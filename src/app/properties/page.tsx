import { columns } from "./columns";
import { DataTable } from "./data-table";
import discoverProperty from "@/utilityComponents/dashboardPage/discoverProperty.json";

const PropertyTable = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={discoverProperty} />
    </div>
  );
};
export default PropertyTable;
