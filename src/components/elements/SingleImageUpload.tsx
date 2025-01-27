"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ImagePlus, X } from "lucide-react";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";

interface SingleImageUploadProps {
  form: UseFormReturn<any>;
  name?: string;
}

const SingleImageUpload = ({
  form,
  name = "coverImage",
}: SingleImageUploadProps) => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  // Watch for form resets and field changes
  useEffect(() => {
    // Watch for field changes
    const subscription = form.watch(() => {
      const fieldValue = form.getValues(name);
      if (!fieldValue) {
        setPreview(null);
      }
    });

    // Watch for form state changes to detect resets
    const resetSubscription = form.formState.submitCount;
    if (form.formState.isSubmitSuccessful) {
      setPreview(null);
    }

    return () => subscription.unsubscribe();
  }, [
    form,
    name,
    form.formState.submitCount,
    form.formState.isSubmitSuccessful,
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
    form.resetField(name);
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
                  <img
                    src={preview as string}
                    alt="Uploaded image"
                    className="max-h-[400px] rounded-lg"
                  />
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
