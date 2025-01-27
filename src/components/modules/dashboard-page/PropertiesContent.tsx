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
  //for image
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
    form.reset();
    setPreview(null);
    form.resetField("image");
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
                  <FormLabel>Villa Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Villa Name"
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
                    <h2 className="tracking-tight">
                      Upload Cover Image
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
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Location"
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
              name="totalBedRoom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Bedroom</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter total number of Bedroom"
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
              name="totalBathRoom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Bathroom</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter total number of Bathroom"
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
              name="totalBathRoom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Bathroom</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter total number of Bathroom"
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
              name="totalBathRoom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Area</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter total number of area"
                      {...field}
                      className="h-16 max-desktop-lg:h-14"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="totalBathRoom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key Features</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter key features"
                      {...field}
                      className="h-16 max-desktop-lg:h-14"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="propertyTransferTax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Property Transfer Tax</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter total number of area"
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
              name="legalFees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Legal Fee</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Legal Fee"
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
              name="homeInspectionFee"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Home Inspection Fee</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Home Inspection Fee"
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
              name="propertyInsurance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Property Insurance</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Property Insurance Fee"
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
              name="mortgageFee"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Mortgage Fee</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Mortgage Fee"
                      {...field}
                      type={
                        field.value && isNaN(Number(field.value))
                          ? "text"
                          : "number"
                      }
                      className="h-16 max-desktop-lg:h-14"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyTax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Property Tax</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Property Tax"
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
              name="homeOwnersAssociationFee"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Homeowner's Association Fee</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Homeowner's Association Fee"
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
              name="additionalFee"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Additional Fee</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Additional Fee"
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
              name="downPayment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Down Payment</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Down Payment"
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
              name="downPayment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Down Payment</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Down Payment"
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
              name="monthlyPropertyInsurance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Monthly Property Insurance</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Monthly Property Insurance"
                      {...field}
                      className="h-16 max-desktop-lg:h-14"
                    />
                  </FormControl>
                  <FormMessage />
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
