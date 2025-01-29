import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DashboardContent = () => {
  return (
    <div className="p-8 space-y-10">
      <h1 className="text-2xl">Dashboard</h1>
      <div className="grid grid-cols-1 mobile-xl:grid-cols-3 gap-5">
        <div>
          <Card className="flex flex-col h-full max-mobile-xl:justify-center max-mobile-xl:items-center">
            <CardHeader>
              <CardTitle className="text-xl">Total Properties</CardTitle>
              <CardDescription>
                Total properties listed in website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-green-500 font-bold">15</p>
            </CardContent>
            {/* <CardFooter>
              <p className="text-purple-shade-60">5 new properties added</p>
            </CardFooter> */}
          </Card>
        </div>
        <div>
          <Card className="flex flex-col gap-0 h-full">
            <CardHeader>
              <CardTitle className="text-xl">Property Type</CardTitle>
              <CardDescription>Total property type</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-green-500 font-bold">6</p>
            </CardContent>
            {/* <CardFooter>
              <p className="text-purple-shade-60">5 new properties added</p>
            </CardFooter> */}
          </Card>
        </div>
        <div>
          <Card className="flex flex-col gap-0 h-full">
            <CardHeader>
              <CardTitle className="text-xl">Property Size Type</CardTitle>
              <CardDescription>Different size property listed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-green-500 font-bold">8</p>
            </CardContent>
            {/* <CardFooter>
              <p className="text-purple-shade-60">5 new properties added</p>
            </CardFooter> */}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
