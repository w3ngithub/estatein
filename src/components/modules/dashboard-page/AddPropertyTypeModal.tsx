import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
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
  FormMessage,
} from "@/components/ui/form";
interface AddPropertyTypeModalProps {
  isModalOpenPropertyType: boolean;
  setIsModalOpenPropertyType: Dispatch<SetStateAction<boolean>>;
}

const AddPropertyTypeModal = ({
  isModalOpenPropertyType,
  setIsModalOpenPropertyType,
}: AddPropertyTypeModalProps) => {
  const AddPropertyTypeSchema = z.object({
    propertyType: z.string().min(1, {
      message: "Property Type is required",
    }),
  });

  const form = useForm<z.infer<typeof AddPropertyTypeSchema>>({
    resolver: zodResolver(AddPropertyTypeSchema),
    defaultValues: {
      propertyType: "",
    },
  });

  const onSubmit = (values: z.infer<typeof AddPropertyTypeSchema>) => {
    console.log("property size:", values);
    setIsModalOpenPropertyType(false);
    form.reset();
  };

  return (
    <Dialog
      open={isModalOpenPropertyType}
      onOpenChange={setIsModalOpenPropertyType}
    >
      <DialogContent className="rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <DialogHeader>
              <DialogTitle>Add Property Type</DialogTitle>
              <DialogDescription> </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem className="flex flex-row gap-5 items-center">
                    {/* <FormLabel></FormLabel> */}
                    <div className="flex flex-col gap-3 w-full">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter Property Type"
                          type="text"
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
                  onClick={() => setIsModalOpenPropertyType(false)}
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

export default AddPropertyTypeModal;
