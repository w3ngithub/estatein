import { NextRequest, NextResponse } from "next/server";
import discoverProperty from "@/utilityComponents/dashboardPage/discoverProperty.json";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // const { searchParams } = new URL(req.url);
  // const id = searchParams.get("id");
  // const id = req.nextUrl.pathname.split("/").pop(); // Extracts the last part of the URL
  const { id } = await params;
  console.log(id, "rrrrr");

  if (!id) {
    return NextResponse.json(
      { error: "Property ID is required" },
      { status: 400 }
    );
  }

  const villa = discoverProperty.find((villa) => villa.id === id);

  if (!villa) {
    return NextResponse.json({ error: "Property not found" }, { status: 404 });
  }

  return NextResponse.json(villa);
}
