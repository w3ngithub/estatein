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
interface AddPropertySizeTypeModalProps {
  isModalOpenPropertySize: boolean;
  setIsModalOpenPropertySize: Dispatch<SetStateAction<boolean>>;
}

const AddPropertySizeTypeModal = ({
  isModalOpenPropertySize,
  setIsModalOpenPropertySize,
}: AddPropertySizeTypeModalProps) => {
  const AddPropertyTypeSchema = z.object({
    propertySizeType: z.string().min(1, {
      message: "Property Size Type is required",
    }),
  });

  const form = useForm<z.infer<typeof AddPropertyTypeSchema>>({
    resolver: zodResolver(AddPropertyTypeSchema),
    defaultValues: {
      propertySizeType: "",
    },
  });

  const onSubmit = (values: z.infer<typeof AddPropertyTypeSchema>) => {
    console.log("property size type:", values);
    setIsModalOpenPropertySize(false);
    form.reset();
  };

  return (
    <Dialog
      open={isModalOpenPropertySize}
      onOpenChange={setIsModalOpenPropertySize}
    >
      <DialogContent className="rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <DialogHeader>
              <DialogTitle>Add Property Size Type</DialogTitle>
              <DialogDescription> </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="propertySizeType"
                render={({ field }) => (
                  <FormItem className="flex flex-row gap-5 items-center">
                    {/* <FormLabel></FormLabel> */}
                    <div className="flex flex-col gap-3 w-full">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter Property Size Type"
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

export default AddPropertySizeTypeModal;
