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

interface SingleImageUploadProps {
  form: UseFormReturn<PropertyListingSchema>;
  name: keyof PropertyListingSchema;
  imageUrl?: string; //for edit
}

const SingleImageUpload = ({
  form,
  name = "coverImage",
  imageUrl,
}: SingleImageUploadProps) => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  useEffect(() => {
    if (imageUrl) {
      setPreview(imageUrl); // // Populate preview from API data
    }
  }, [imageUrl, form, name]);

  // Watch for form resets and field changes
  useEffect(() => {
    // Watch for field changes
    const subscription = form.watch(() => {
      const fieldValue = form.getValues(name);
      if (!fieldValue && !imageUrl) {
        setPreview(null);
      }
    });

    // Watch for form state changes to detect resets
    // const resetSubscription = form.formState.submitCount;
    // if (form.formState.isSubmitSuccessful) {
    //   setPreview(null);
    // }

    return () => subscription.unsubscribe();
  }, [
    form,
    name,
    form.formState.submitCount,
    form.formState.isSubmitSuccessful,
    imageUrl,
  ]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      const reader = new FileReader();
      try {
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(acceptedFiles[0]);
        form.setValue(name, acceptedFiles[0], {
          shouldValidate: true,
          shouldDirty: true,
        });
        form.clearErrors(name);
      } catch (error) {
        console.log(error);
        setPreview(null);
        form.resetField(name);
      }
    },
    [form, name]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 1000000,
      accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null); // Changed from empty string to null
    // form.resetField(name);
    //@ts-ignore
    form.setValue(name, null); // Change this to set null instead of resetting
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className="mx-auto md:w-1/2">
          <FormLabel
            className={`${fileRejections.length !== 0 && "text-destructive"}`}
          >
            <h2 className="tracking-tight">
              Upload Cover Image
              <span
                className={
                  form.formState.errors[name] || fileRejections.length !== 0
                    ? "text-destructive"
                    : "text-muted-foreground"
                }
              ></span>
            </h2>
          </FormLabel>
          <FormControl>
            <div
              {...getRootProps()}
              className="mx-auto flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border border-foreground p-8 shadow-sm shadow-foreground"
            >
              {preview && (
                <div className="relative">
                  {/* ${process.env.NEXT_PUBLIC_BASE_PATH}${preview} */}
                  <Image
                    src={
                      preview?.toString().startsWith("data:image")
                        ? (preview as string) // Use Base64 directly
                        : `${process.env.NEXT_PUBLIC_BASE_PATH}/uploads/${preview}` // Use API URL
                    }
                    alt="Uploaded image"
                    className="max-h-[400px] w-full object-cover rounded-lg"
                    width={1920 / 5}
                    height={814 / 5}
                  />

                  {/* {imageUrl ? (
                    <Image
                      // src={preview as string}
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}${preview}`}
                      alt="Uploaded image"
                      className="max-h-[400px] w-full object-cover rounded-lg"
                      width={1920 / 5}
                      height={814 / 5}
                    />
                  ) : (
                    <Image
                      src={preview as string}
                      // src={`${process.env.NEXT_PUBLIC_BASE_PATH}${preview}`}
                      alt="Uploaded image"
                      className="max-h-[400px] w-full object-cover rounded-lg"
                      width={1920 / 5}
                      height={814 / 5}
                    />
                  )} */}

                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-destructive text-white hover:bg-destructive-light"
                    aria-label="Remove image"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
              {!preview && <ImagePlus className="size-40" />}
              <Input {...getInputProps()} type="file" />
              {isDragActive ? (
                <p>Drop the image!</p>
              ) : (
                <p>Click here or drag an image to upload it</p>
              )}
            </div>
          </FormControl>
          <FormMessage>
            {fileRejections.length !== 0 && (
              <span>
                Image must be less than 1MB and of type png, jpg, or jpeg
              </span>
            )}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};

export default SingleImageUpload;
