import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import jsonpatch from "fast-json-patch";

const filePath = path.join(
  process.cwd(),
  "src/utilityComponents/dashboardPage/propertySizeTypeData.json"
);

export async function PATCH(req: NextRequest) {
  try {
    // Read current data from the file
    const currentData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // Parse patch operations from request body
    const patchOps = await req.json();
    console.log("Patch operations:", patchOps); // Log patch operations

    // Apply JSON Patch
    const updatedData = jsonpatch.applyPatch(currentData, patchOps).newDocument;

    // Save updated data back to file
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));

    // Send success response
    return NextResponse.json(
      { message: "Data updated successfully", data: updatedData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during PATCH request:", error); // Log the error
    return NextResponse.json(
      { message: "Error updating data" },
      { status: 500 }
    );
  }
}
