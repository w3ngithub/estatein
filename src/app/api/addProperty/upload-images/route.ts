import { NextRequest, NextResponse } from "next/server";
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

//for update property
// export async function PUT(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const propertyId = params.id;
//     const formData = await request.formData();
//     const coverImage = formData.get("coverImage") as File | null;
//     const multipleImages = formData.getAll("multipleImages") as File[];

//     // Create uploads directory if it doesn't exist
//     const uploadDir = join(process.cwd(), "public", "uploads");
//     try {
//       await fs.access(uploadDir);
//     } catch {
//       await fs.mkdir(uploadDir, { recursive: true });
//     }

//     // Handle cover image
//     let coverImageUrl = "";
//     if (coverImage && coverImage.size > 0) {
//       const coverImagePath = join(
//         uploadDir,
//         `${propertyId}-cover-${Date.now()}-${coverImage.name}`
//       );
//       const coverImageBuffer = Buffer.from(await coverImage.arrayBuffer());
//       await writeFile(coverImagePath, coverImageBuffer);
//       coverImageUrl = `/uploads/${path.basename(coverImagePath)}`;
//     }

//     // Handle multiple images
//     const multipleImageUrls = await Promise.all(
//       multipleImages.map(async (file, index) => {
//         if (file.size > 0) {
//           const imagePath = join(
//             uploadDir,
//             `${propertyId}-${index}-${Date.now()}-${file.name}`
//           );
//           const imageBuffer = Buffer.from(await file.arrayBuffer());
//           await writeFile(imagePath, imageBuffer);
//           return `/uploads/${path.basename(imagePath)}`;
//         }
//         return "";
//       })
//     );

//     // Here you would typically update the property in your database
//     // For this example, we'll just return the new image URLs
//     return NextResponse.json({
//       coverImageUrl,
//       multipleImageUrls: multipleImageUrls.filter((url) => url !== ""),
//     });
//   } catch (error) {
//     console.error("Error handling file upload:", error);
//     return NextResponse.json(
//       { error: "Failed to update property attachments" },
//       { status: 500 }
//     );
//   }
// }

export async function PUT(request: NextRequest) {
  try {
    const formData = await request.formData();
    const coverImage = formData.get("coverImage") as File | null;
    const multipleImages = formData.getAll("multipleImages") as File[];

    // Create uploads directory if it doesn't exist
    const uploadDir = join(process.cwd(), "public", "uploads");
    try {
      await fs.access(uploadDir);
    } catch {
      await fs.mkdir(uploadDir, { recursive: true });
    }

    // Function to get file extension
    // const getFileExtension = (fileName: string) =>
    //   fileName.substring(fileName.lastIndexOf("."));

    // Handle cover image
    let coverImageUrl = "";
    if (coverImage && coverImage.size > 0) {
      // const coverImageExt = getFileExtension(coverImage.name);
      const coverImageName = `${Date.now()}-${coverImage.name}`; // Unique filename
      const coverImagePath = join(uploadDir, coverImageName);
      const coverImageBuffer = Buffer.from(await coverImage.arrayBuffer());
      await writeFile(coverImagePath, coverImageBuffer);
      coverImageUrl = `/uploads/${coverImageName}`;
    }

    // Handle multiple images
    const multipleImageUrls = await Promise.all(
      multipleImages.map(async (file) => {
        if (file.size > 0) {
          // const fileExt = getFileExtension(file.name);
          const imageName = `${Date.now()}-${file.name}`;
          const imagePath = join(uploadDir, imageName);
          const imageBuffer = Buffer.from(await file.arrayBuffer());
          await writeFile(imagePath, imageBuffer);
          return `/uploads/${imageName}`;
        }
        return "";
      })
    );

    return NextResponse.json({
      coverImageUrl, // ✅ Make sure it's "coverImageUrl"
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
