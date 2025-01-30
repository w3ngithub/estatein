import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const DashboardContent = () => {
  const data01 = [
    { propertyName: "Villa A", propertySize: 400 },
    { propertyName: "Villa B", propertySize: 300 },
    { propertyName: "Villa C", propertySize: 300 },
    { propertyName: "Villa D", propertySize: 200 },
    { propertyName: "Villa E", propertySize: 278 },
    { propertyName: "Villa F", propertySize: 189 },
  ];

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
          </Card>
        </div>
      </div>
      {/* Pie Chart section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Pie Chart</CardTitle>
          <CardDescription>
            Shows Property Name and Property Size
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  nameKey="propertyName"
                  dataKey="propertySize"
                  isAnimationActive={false}
                  data={data01}
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label={({ name }) => name}
                />

                <Tooltip formatter={(value) => `${value} sq ft`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      {/* Area Chart section */}
    </div>
  );
};

export default DashboardContent;
