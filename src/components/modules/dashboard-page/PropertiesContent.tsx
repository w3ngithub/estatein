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

const PropertiesContent = () => {
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
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      pillName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

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
