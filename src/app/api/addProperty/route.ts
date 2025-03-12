import { NextRequest, NextResponse } from "next/server";
import { applyPatch } from "fast-json-patch";
import { promises as ps } from "fs";
import path from "path";
import fs from "fs";
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

// GET request to retrieve all property data
export async function GET(req: NextRequest) {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error during GET request:", error);
    return NextResponse.json(
      { message: "Error retrieving data" },
      { status: 500 }
    );
  }
}

// Helper function to write JSON file
async function writeJsonFile(data: PropertyApiResponse[]): Promise<void> {
  await ps.writeFile(filePath, JSON.stringify(data, null, 2));
}

//to post property
export async function PATCH(request: Request) {
  try {
    const patchOperations = await request.json();

    // Read the current data
    const currentData = await readJsonFile();

    // Apply the patch operations
    const result = applyPatch(currentData, patchOperations).newDocument;

    // Write the updated data back to the file
    await writeJsonFile(result);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error updating property:", error);
    return NextResponse.json(
      { error: "Failed to update property" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    // Read existing data
    const currentData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // Filter out the item to be deleted
    const updatedData = currentData.filter(
      (item: { id: number }) => item.id !== id
    );

    // Write updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));

    return NextResponse.json(
      { message: "Deleted successfully", data: updatedData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting data:", error);
    return NextResponse.json(
      { message: "Error deleting data" },
      { status: 500 }
    );
  }
}
