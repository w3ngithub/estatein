"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import PropertyType from "./PropertyType";
import { toast } from "sonner";
import PropertySizeType from "./PropertySizeType";
import Loading from "@/components/elements/Loading";
import { PropertyApiResponse } from "@/components/propertiesTable/types";

interface PropertyPriceData {
  propertyName: string;
  area: number;
  price: number;
  areaUnit: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: PropertyPriceData;
  }>;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF"];

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const { propertyName, area, price, areaUnit } = payload[0].payload;
    return (
      <div className="bg-white p-2 border shadow-md rounded-md text-black">
        <p className="font-bold">{propertyName}</p>
        <p>
          Area: {area} {areaUnit}
        </p>
        <p>Price: ${price}</p>
      </div>
    );
  }
  return null;
};

const DashboardContent = ({
  onNavigateToSettings,
}: {
  onNavigateToSettings?: () => void;
}) => {
  const [property, setProperty] = useState<PropertyApiResponse[]>([]);
  const [propertyType, setPropertyType] = useState<PropertyType[]>([]);
  const [propertySizeType, setPropertySizeType] = useState<PropertySizeType[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProperties = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/addProperty");
      const result = await res.json();
      if (result.data && Array.isArray(result.data)) {
        setProperty(result.data);
      }
    } catch (error) {
      console.error("Failed to fetch properties:", error);
      toast.error("Failed to fetch property");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch and display property type
    fetchProperties();
  }, []);

  useEffect(() => {
    // Fetch and display property type
    async function fetchData() {
      try {
        const res = await fetch("/api/addPropertyType");
        const result = await res.json();
        setPropertyType(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch property types");
      } finally {
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    // Fetch and display data
    async function fetchData() {
      try {
        const res = await fetch("/api/addPropertySizeType");
        const result = await res.json();
        setPropertySizeType(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch property types");
      }
    }
    fetchData();
  }, []);

  //pie chart data
  const data01 = property.map((item) => ({
    propertyName: item.villaName,
    propertySize: item.totalArea,
    areaUnit: item.areaUnit,
  }));

  //area chart data
  const data = property.map((item) => ({
    propertyName: item.villaName,
    area: item.totalArea,
    price: item.price,
    areaUnit: item.areaUnit,
  }));

  return (
    <div className="p-8 space-y-10">
      <h1 className="text-2xl">Dashboard</h1>
      <div className="grid grid-cols-1 mobile-xl:grid-cols-3 gap-5">
        {/* Three charts */}
        <Card
          className="flex flex-col h-full cursor-pointer"
          onClick={onNavigateToSettings}
        >
          <CardHeader>
            <CardTitle className="text-xl">Total Properties</CardTitle>
            <CardDescription className="font-semibold">
              Total properties listed in website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-green-500 font-bold">{property.length}</p>
          </CardContent>
        </Card>
        <Card
          className="flex flex-col gap-0 h-full cursor-pointer"
          onClick={onNavigateToSettings}
        >
          <CardHeader>
            <CardTitle className="text-xl">Property Type</CardTitle>
            <CardDescription className="font-semibold">
              Total property type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-green-500 font-bold">{propertyType.length}</p>
          </CardContent>
        </Card>
        <Card
          className="flex flex-col gap-0 h-full cursor-pointer"
          onClick={onNavigateToSettings}
        >
          <CardHeader>
            <CardTitle className="text-xl">Property Size Type</CardTitle>
            <CardDescription className="font-semibold">
              Different size property listed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-green-500 font-bold">
              {propertySizeType.length}
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 tablet-lg:grid-cols-2 gap-5">
        {/* Pie Chart section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Pie Chart</CardTitle>
            <CardDescription className="font-semibold">
              Shows Property Name and Property Size
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96 mobile-lg:p-8">
              <ResponsiveContainer width="100%" height="100%">
                {isLoading ? (
                  <div className="flex justify-center items-center h-40">
                    <Loading />
                  </div>
                ) : (
                  <PieChart width={400} height={400}>
                    <Pie
                      nameKey="propertyName"
                      dataKey="propertySize"
                      isAnimationActive={false}
                      data={data01}
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      label={({ name }) => name}
                    >
                      {data01.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>

                    <Tooltip
                      formatter={(value, _, { payload }) =>
                        `${value} ${payload.areaUnit}`
                      }
                    />
                  </PieChart>
                )}
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        {/* Area Chart section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Area Chart</CardTitle>
            <CardDescription className="font-semibold">
              Shows Area, Price and Property Name
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[500px] mobile-lg:p-8">
              <ResponsiveContainer width="100%" height={400}>
                {isLoading ? (
                  <div className="flex justify-center items-center h-40">
                    <Loading />
                  </div>
                ) : (
                  <AreaChart
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 20,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="area"
                      label={{
                        value: "Area",
                        position: "bottom",
                        offset: -5,
                      }}
                    />
                    <YAxis
                      label={{
                        value: "Price ($)",
                        angle: -90,
                        position: "insideLeft",
                      }}
                    />
                    <Tooltip content={<CustomTooltip />} />

                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                  </AreaChart>
                )}
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent;
