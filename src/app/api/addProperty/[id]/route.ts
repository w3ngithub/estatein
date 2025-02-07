import { NextResponse } from "next/server";
import discoverProperty from "@/utilityComponents/dashboardPage/discoverProperty.json";

export type paramsType = Promise<{ id: string }>;

export default async function GET(props: { params: paramsType }) {
  const { id } = await props.params;
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
