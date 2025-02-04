// app/api/addProperty/route.ts
import { NextResponse } from "next/server";
import { applyPatch } from "fast-json-patch";
import { promises as fs } from "fs";
import path from "path";
// import carouselDataDiscoverProperty from "@/utilityComponents/propertyPage/discoverProperty.json";

const filePath = path.join(
  process.cwd(),
  "src/utilityComponents/dashboardPage/discoverProperty.json"
);

// Helper function to read JSON file
async function readJsonFile() {
  try {
    const fileData = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileData);
  } catch (error) {
    // If file doesn't exist, return initial data
    return {
      // properties: carouselDataDiscoverProperty,
    };
  }
}

// Helper function to write JSON file
async function writeJsonFile(data: any) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

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
