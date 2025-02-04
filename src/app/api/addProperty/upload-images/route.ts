import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const coverImage = formData.get("coverImage") as File;
    const multipleImages: File[] = [];

    // Extract multiple images correctly
    for (const entry of formData.entries()) {
      const [key, value] = entry;
      if (key === "multipleImages" && value instanceof File) {
        multipleImages.push(value);
      }
    }

    // Create uploads directory if it doesn't exist
    const uploadDir = join(process.cwd(), "public", "uploads");
    try {
      await fs.access(uploadDir);
    } catch {
      await fs.mkdir(uploadDir, { recursive: true });
    }

    // Handle cover image
    let coverImageUrl = "";
    if (coverImage && coverImage.size > 0) {
      const coverImagePath = join(
        uploadDir,
        `${Date.now()}-${coverImage.name}`
      );
      const coverImageBuffer = Buffer.from(await coverImage.arrayBuffer());
      await writeFile(coverImagePath, coverImageBuffer);
      coverImageUrl = `/uploads/${path.basename(coverImagePath)}`;
    }

    // Handle multiple images
    const multipleImageUrls = await Promise.all(
      multipleImages.map(async (file) => {
        if (file.size > 0) {
          const imagePath = join(uploadDir, `${Date.now()}-${file.name}`);
          const imageBuffer = Buffer.from(await file.arrayBuffer());
          await writeFile(imagePath, imageBuffer);
          return `/uploads/${path.basename(imagePath)}`;
        }
        return "";
      })
    );

    return NextResponse.json({
      coverImageUrl,
      multipleImageUrls: multipleImageUrls.filter((url) => url !== ""),
    });
  } catch (error) {
    console.error("Error handling file upload:", error);
    return NextResponse.json(
      { error: "Failed to upload files" },
      { status: 500 }
    );
  }
}
