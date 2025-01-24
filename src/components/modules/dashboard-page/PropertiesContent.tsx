"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ImagePlus, X } from "lucide-react";

const PropertiesContent = () => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>("");

  const formSchema = z.object({
    title: z.string().min(1, {
      message: "Title is required",
    }),
    description: z.string().min(1, {
      message: "Description is required",
    }),
    price: z.string().min(1, {
      message: "Price is required",
    }),
    pillName: z.string().min(1, {
      message: "Pill Name is required",
    }),
    image: z
      //Rest of validations done via react dropzone
      .instanceof(File)
      .refine((file) => file.size !== 0, "Please upload an image"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      pillName: "",
      image: new File([""], "filename"),
    },
  });
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader();
      try {
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(acceptedFiles[0]);
        form.setValue("image", acceptedFiles[0]);
        form.clearErrors("image");
      } catch (error) {
        setPreview(null);
        form.resetField("image");
      }
    },
    [form]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 1000000,
      accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    console.log(`Image uploaded successfully 🎉 ${values.image.name}`);
  }

  const handleRemoveImage = (e: any) => {
    e.stopPropagation();
    setPreview(null);
    form.resetField("image");
  };

  return (
    <div className="p-8 space-y-10">
      <h1 className="text-2xl">Properties</h1>
      {/* form */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Title"
                      {...field}
                      className="h-16 max-desktop-lg:h-14"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Enter Description"
                      className="h-44 max-desktop-lg:h-28 max-mobile-xl:h-20 border border-grey-15"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Price"
                      className="h-16 max-desktop-lg:h-14"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pillName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pill Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Pill Name"
                      className="h-16 max-desktop-lg:h-14"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* image upload */}
            <FormField
              control={form.control}
              name="image"
              render={() => (
                <FormItem className="mx-auto md:w-1/2">
                  <FormLabel
                    className={`${
                      fileRejections.length !== 0 && "text-destructive"
                    }`}
                  >
                    <h2 className="text-xl font-semibold tracking-tight">
                      Upload your image
                      <span
                        className={
                          form.formState.errors.image ||
                          fileRejections.length !== 0
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
                          {/* Cross Button */}
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
                      <p>
                        Image must be less than 1MB and of type png, jpg, or
                        jpeg
                      </p>
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <div className="w-full flex justify-end">
              <Button
                className=" bg-purple-shade-60 hover:bg-purple-shade-d60 text-white py-6 px-4"
                type="submit"
              >
                Add Property
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PropertiesContent;
