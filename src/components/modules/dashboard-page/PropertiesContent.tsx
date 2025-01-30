"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { nanoid } from "nanoid";
import "react-dropzone-uploader/dist/styles.css";
import SingleImageUpload from "@/components/elements/SingleImageUpload";
import MultipleImageUpload from "@/components/elements/MultipleImageUpload";
import { useState } from "react";
import {
  PropertyListingSchema,
  propertySchema,
} from "@/schema/property-listing-form";

const PropertiesContent = () => {
  // for adding multiple features
  const [newFeature, setNewFeature] = useState("");

  const form = useForm<PropertyListingSchema>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      villaName: "",
      keyFeatures: [],
      description: "",
      price: "",
      pillName: "",
      location: "",
      totalBedRoom: 0,
      totalBathRoom: 0,
      totalArea: 0,
      propertyTransferTax: 0,
      legalFees: 0,
      homeInspectionFee: 0,
      propertyInsurance: 0,
      mortgageFee: "",
      propertyTax: 0,
      additionalFee: 0,
      homeOwnersAssociationFee: 0,
      downPayment: 0,
      monthlyPropertyInsurance: 0,
      coverImage: new File([""], "filename"),
      multipleImages: [],
    },
  });

  function onSubmit(values: PropertyListingSchema) {
    // console.log(values);

    const formData = new FormData();

    // Append regular form fields
    formData.append("villaName", values.villaName);
    formData.append("price", values.price.toString());
    formData.append("pillName", values.pillName);
    formData.append("location", values.location);
    formData.append("totalBedRoom", values.totalBedRoom.toString());
    formData.append("totalBathRoom", values.totalBathRoom.toString());
    formData.append("totalArea", values.totalArea.toString());
    formData.append(
      "propertyTransferTax",
      values.propertyTransferTax.toString()
    );
    formData.append("legalFees", values.legalFees.toString());
    formData.append("homeInspectionFee", values.homeInspectionFee.toString());
    formData.append("propertyInsurance", values.propertyInsurance.toString());
    formData.append("mortgageFee", values.mortgageFee);
    formData.append("propertyTax", values.propertyTax.toString());
    formData.append("additionalFee", values.additionalFee.toString());
    formData.append(
      "homeOwnersAssociationFee",
      values.homeOwnersAssociationFee.toString()
    );
    formData.append("downPayment", values.downPayment.toString());
    formData.append(
      "monthlyPropertyInsurance",
      values.monthlyPropertyInsurance.toString()
    );
    formData.append("description", values.description);

    formData.append("keyFeatures", JSON.stringify(values.keyFeatures));

    formData.append("coverImage", values.coverImage);

    values.multipleImages.forEach((image, index) => {
      formData.append(`multipleImages[${index}]`, image);
    });

    // If you want to see the complete object structure
    const formDataObject = Object.fromEntries(formData.entries());
    console.log("Form Data as object:", formDataObject);

    // Reset form after submission
    form.reset();
    form.resetField("coverImage");
    form.resetField("multipleImages");
  }

  return (
    <div className="p-8 space-y-10">
      <h1 className="text-2xl">Properties</h1>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid mobile-lg:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="villaName"
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
                        onChange={(e) => field.onChange(Number(e.target.value))}
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
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="h-16 max-desktop-lg:h-14"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="totalArea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Area</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter total number of area"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="h-16 max-desktop-lg:h-14"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                        onChange={(e) => field.onChange(Number(e.target.value))}
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
                        onChange={(e) => field.onChange(Number(e.target.value))}
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
                        onChange={(e) => field.onChange(Number(e.target.value))}
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
                        onChange={(e) => field.onChange(Number(e.target.value))}
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
                        placeholder="Enter Mortgage Fee"
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
                name="propertyTax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Property Tax</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter Property Tax"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
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
                    <FormLabel>
                      Enter Homeowner&apos;s Association Fee
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter Homeowner's Association Fee"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
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
                        onChange={(e) => field.onChange(Number(e.target.value))}
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
                        onChange={(e) => field.onChange(Number(e.target.value))}
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
                        onChange={(e) => field.onChange(Number(e.target.value))}
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
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="h-16 max-desktop-lg:h-14"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 space-y-3">
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
                name="keyFeatures"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key Features</FormLabel>
                    <FormControl>
                      <div className="space-y-2">
                        <Input
                          placeholder="Enter a key feature"
                          value={newFeature}
                          onChange={(e) => setNewFeature(e.target.value)}
                          className="h-16 max-desktop-lg:h-14"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (newFeature.trim()) {
                              field.onChange([
                                ...field.value,
                                { id: nanoid(), name: newFeature },
                              ]);
                              setNewFeature(""); // Clear input
                            }
                          }}
                          className="px-4 py-2 text-white bg-blue-600 rounded-lg"
                        >
                          Add Feature
                        </button>

                        {/* List of added features */}
                        <ul className="space-y-1">
                          {field.value.map((feature, index) => (
                            <li
                              key={feature.id}
                              className="flex items-center justify-between p-2 bg-gray-100 dark:bg-grey-shade-40 rounded-lg"
                            >
                              <span>{feature.name}</span>
                              <Button
                                variant="destructive"
                                onClick={() => {
                                  const updatedFeatures = field.value.filter(
                                    (_, i) => i !== index
                                  );
                                  field.onChange(updatedFeatures);
                                }}
                                className="text-white"
                              >
                                Remove
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full space-y-10">
                <SingleImageUpload form={form} name="coverImage" />
                <MultipleImageUpload form={form} name="multipleImages" />
              </div>

              <div className="w-full flex justify-end">
                <Button
                  className=" bg-purple-shade-60 hover:bg-purple-shade-d60 text-white py-6 px-4"
                  type="submit"
                >
                  Add Property
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PropertiesContent;
