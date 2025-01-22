"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalenderIcon } from "@/svgs/PropertyPageSvg";
import { useState } from "react";

interface CustomCalendarProps {
  value: string | null;
  onChange: (newDate: string | null) => void;
}

const FormSchema = z.object({
  buildDate: z.string().optional(),
});

export function CustomCalendar({ value, onChange }: CustomCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  //   console.log(selectedDate, "fffffffff");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // console.log(data, "data");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="buildDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger
                  className="h-16 max-desktop-lg:h-14 border border-grey-15 dark:bg-grey-shade-8"
                  asChild
                >
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(new Date(field.value), "PPP")
                      ) : (
                        <div className="flex flex-row w-full">
                          <div className="border-r border-grey-shade-15 pr-3">
                            <CalenderIcon />
                          </div>
                          <span className="flex flex-row justify-center items-center w-full dark:first-line:text-white">
                            Build Year
                          </span>
                        </div>
                      )}
                      <ChevronDown className="ml-auto h-4 w-4" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) => {
                      const isoDate = date ? date.toISOString() : "";
                      setSelectedDate(isoDate); // Update state
                      field.onChange(isoDate); // Update form field value
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
