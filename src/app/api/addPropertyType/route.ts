import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import jsonpatch from "fast-json-patch";

const filePath = path.join(
  process.cwd(),
  "src/utilityComponents/dashboardPage/propertyTypeData.json"
);

// GET request to retrieve data
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

//for post
export async function PATCH(req: NextRequest) {
  try {
    // Read current data from the file
    const currentData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // Parse patch operations from request body
    const patchOps = await req.json();
    // console.log("Patch operations:", patchOps); // Log patch operations

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

//for edit
export async function PUT(req: NextRequest) {
  try {
    // Read current data from the file
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const propertySizeTypes = JSON.parse(fileContent);

    // Parse request body
    const { id, value, selectFieldData } = await req.json();

    if (!id || !value || !selectFieldData) {
      return NextResponse.json(
        {
          message:
            "Invalid request. 'id', 'value' and 'selectFieldData' are required.",
        },
        { status: 400 }
      );
    }

    // Find and update the specific property
    const propertyIndex = propertySizeTypes.findIndex(
      (p: { id: string | number }) => p.id === id
    );

    if (propertyIndex === -1) {
      return NextResponse.json(
        { message: `Property with ID ${id} not found.` },
        { status: 404 }
      );
    }

    // Update the property name
    propertySizeTypes[propertyIndex].selectFieldData = selectFieldData;
    propertySizeTypes[propertyIndex].value = selectFieldData;

    // Save updated data
    fs.writeFileSync(filePath, JSON.stringify(propertySizeTypes, null, 2));

    return NextResponse.json(
      {
        message: "Property updated successfully",
        data: propertySizeTypes[propertyIndex],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during PATCH request:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
