import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as ps } from "fs";
import { PropertyApiResponse } from "@/components/propertiesTable/types";

const filePath = path.join(
  process.cwd(),
  "src/utilityComponents/dashboardPage/discoverProperty.json"
);

// Helper function to read JSON file
async function readJsonFile() {
  try {
    const fileData = await ps.readFile(filePath, "utf8");
    return JSON.parse(fileData);
  } catch (error) {
    console.error("Error adding property", error);
    // If file doesn't exist, return initial data
    return {
      // properties: carouselDataDiscoverProperty,
    };
  }
}

// Helper function to write JSON file
async function writeJsonFile(data: PropertyApiResponse[]): Promise<void> {
  await ps.writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json(
      { error: "Property ID is required" },
      { status: 400 }
    );
  }

  const discoverProperty = await readJsonFile();

  const villa = discoverProperty.find((villa: any) => villa.id === id);

  if (!villa) {
    return NextResponse.json({ error: "Property not found" }, { status: 404 });
  }

  return NextResponse.json(villa);
}

// PUT update property
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const updateData = await req.json();

    // Read current data
    const properties = await readJsonFile();

    // Find property index
    const propertyIndex = properties.findIndex(
      (p: PropertyApiResponse) => p.id === id
    );

    if (propertyIndex === -1) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    // Update property data while preserving the ID
    const updatedProperty = {
      ...properties[propertyIndex],
      ...updateData,
      id, // Ensure ID remains unchanged
    };

    // Update the property in the array
    properties[propertyIndex] = updatedProperty;

    // Write updated data back to file
    await writeJsonFile(properties);

    return NextResponse.json(updatedProperty, { status: 200 });
  } catch (error) {
    console.error("Error updating property:", error);
    return NextResponse.json(
      { error: "Failed to update property" },
      { status: 500 }
    );
  }
}
