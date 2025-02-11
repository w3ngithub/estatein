"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ImagePlus, X } from "lucide-react";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";
import Image from "next/image";
import { PropertyListingSchema } from "@/schema/property-listing-form";

interface MultipleImageUploadProps {
  form: UseFormReturn<PropertyListingSchema>;
  name: keyof Pick<PropertyListingSchema, "multipleImages">;
  multipleImgUrl?: string[]; //for edit
}

const MultipleImageUpload = ({
  form,
  name = "multipleImages",
  multipleImgUrl,
}: MultipleImageUploadProps) => {
  // const [previews, setPreviews] = useState<
  //   Array<{ id: string; preview: string }>
  // >([]);
  const [previews, setPreviews] = useState<
    Array<{ id: string; preview: string | File }> // Store File or URL
  >([]);

  // useEffect(() => {
  //   if (multipleImgUrl) {
  //     setPreviews(multipleImgUrl); // // Populate previews from API data
  //   }
  // }, [multipleImgUrl]);
  useEffect(() => {
    if (multipleImgUrl) {
      setPreviews(
        multipleImgUrl.map((url) => ({
          id: Math.random().toString(36).substr(2, 9),
          preview: url,
        }))
      );
    }
  }, [multipleImgUrl]);

  // Watch for form resets
  useEffect(() => {
    const subscription = form.watch(() => {
      const value = form.getValues(name);
      if (!value || value.length === 0) {
        // Cleanup existing preview URLs
        previews.forEach((preview) => URL.revokeObjectURL(preview.preview));
        setPreviews([]);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, name, previews]);

  // const onDrop = useCallback(
  //   (acceptedFiles: File[]) => {
  //     // Create preview URLs for all accepted files
  //     const newPreviews = acceptedFiles.map((file) => ({
  //       id: Math.random().toString(36).substr(2, 9),
  //       preview: URL.createObjectURL(file),
  //     }));

  //     setPreviews((prev) => [...prev, ...newPreviews]);

  //     // Update form value with all files
  //     const currentFiles = form.getValues(name) || [];
  //     form.setValue(name, [...currentFiles, ...acceptedFiles]);
  //     form.clearErrors(name);
  //   },
  //   [form, name]
  // );
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newPreviews = acceptedFiles.map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        preview: file, // Store the File object directly
      }));

      setPreviews((prev) => [...prev, ...newPreviews]);
      form.setValue(name, [...(form.getValues(name) || []), ...acceptedFiles]);
      form.clearErrors(name);
    },
    [form, name]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxSize: 1000000,
      accept: {
        "image/png": [],
        "image/jpg": [],
        "image/jpeg": [],
      },
    });

  // Cleanup preview URLs when component unmounts
  useEffect(() => {
    return () => {
      previews.forEach((preview) => URL.revokeObjectURL(preview.preview));
    };
  }, [previews]);

  const handleRemoveMultipleImage = (idToRemove: string) => {
    setPreviews((prev) => prev.filter((p) => p.id !== idToRemove));

    const currentFiles = form.getValues(name) as File[];
    const updatedFiles = currentFiles.filter(
      (_, index) => previews[index].id !== idToRemove
    );
    form.setValue(name, updatedFiles);
  };
  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className="mx-auto md:w-1/2">
          <FormLabel
            className={fileRejections.length !== 0 ? "text-destructive" : ""}
          >
            <h2 className="tracking-tight">Upload Multiple Property Images</h2>
          </FormLabel>
          <FormControl>
            <div
              {...getRootProps()}
              className="mx-auto flex cursor-pointer flex-col items-center justify-center gap-y-4 rounded-lg border border-foreground p-8 shadow-sm shadow-foreground"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {previews?.map((preview, index) => {
                  return (
                    <div key={preview.id} className="relative">
                      <Image
                        src={
                          typeof preview.preview === "string"
                            ? preview.preview.startsWith("data:image")
                              ? preview.preview
                              : `${process.env.NEXT_PUBLIC_BASE_PATH}${preview.preview}`
                            : preview.preview instanceof File
                            ? URL.createObjectURL(preview.preview)
                            : ""
                        }
                        alt="Uploaded image"
                        className="max-h-[400px] w-full object-cover rounded-lg"
                        width={1920 / 5}
                        height={814 / 5}
                      />

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveMultipleImage(preview.id);
                        }}
                        className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-destructive text-white hover:bg-destructive-light"
                        aria-label="Remove image"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  );
                })}
              </div>
              {previews.length === 0 && <ImagePlus className="size-40" />}
              <Input {...getInputProps()} type="file" multiple />
              {isDragActive ? (
                <p>Drop the images here!</p>
              ) : (
                <p>Click here or drag images to upload them</p>
              )}
            </div>
          </FormControl>
          <FormMessage>
            {fileRejections.length !== 0 && (
              <p>Images must be less than 1MB and of type png, jpg, or jpeg</p>
            )}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};

export default MultipleImageUpload;
