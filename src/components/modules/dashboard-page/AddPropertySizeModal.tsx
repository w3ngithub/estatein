import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
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

const AddPropertySizeModal = ({
  isModalOpenPropertySize,
  setIsModalOpenPropertySize,
}: any) => {
  const AddPropertySizeSchema = z.object({
    aana: z
      .number({ invalid_type_error: "Aana must be a number" })
      .min(1, { message: "Aana is required" }),
    dhur: z
      .number({ invalid_type_error: "Dhur must be a number" })
      .min(1, { message: "Dhur is required" }),
  });

  const form = useForm<z.infer<typeof AddPropertySizeSchema>>({
    resolver: zodResolver(AddPropertySizeSchema),
    defaultValues: {
      aana: 0,
      dhur: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof AddPropertySizeSchema>) => {
    console.log("property size:", values);
    setIsModalOpenPropertySize(false);
    form.reset();
  };

  return (
    <Dialog
      open={isModalOpenPropertySize}
      onOpenChange={setIsModalOpenPropertySize}
    >
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <DialogHeader>
              <DialogTitle>Add Property Size Type</DialogTitle>
              <DialogDescription> </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="aana"
                render={({ field }) => (
                  <FormItem className="flex flex-row gap-5 items-center">
                    <FormLabel>Aana:</FormLabel>
                    <div className="flex flex-col gap-3 w-full">
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value) || undefined)
                          }
                          placeholder="Enter Aana"
                          type="number"
                          className="h-14"
                        />
                      </FormControl>

                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dhur"
                render={({ field }) => (
                  <FormItem className="flex flex-row gap-5 items-center">
                    <FormLabel>Dhur:</FormLabel>
                    <div className="flex flex-col gap-3 w-full">
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value) || undefined)
                          }
                          placeholder="Enter Dhur"
                          type="number"
                          className="h-14"
                        />
                      </FormControl>

                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <div className="flex flex-row justify-between items-center">
                <Button
                  onClick={() => setIsModalOpenPropertySize(false)}
                  variant="destructive"
                  className="px-6"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-purple-shade-60 hover:bg-purple-shade-d60 text-white px-7"
                >
                  Save
                </Button>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPropertySizeModal;
