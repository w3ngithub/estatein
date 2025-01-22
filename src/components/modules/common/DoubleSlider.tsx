"use client";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface DoubleSliderProps {
  placeholder: string;
  svgIcon?: React.ReactNode;
}

const DoubleSlider = ({ placeholder, svgIcon }: DoubleSliderProps) => {
  const [values, setValues] = useState([10, 900]);
  return (
    <Select>
      <SelectTrigger className="h-16 max-desktop-lg:h-14 border border-grey-15 dark:bg-grey-shade-8">
        <div className="border-r border-grey-shade-15 pr-3">{svgIcon}</div>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <div className="flex justify-center items-center h-36 p-5">
          <DualRangeSlider
            label={(value) => <span className="text-white">{`${value}K`}</span>}
            value={values}
            onValueChange={setValues}
            min={10}
            max={900}
            step={10}
          />
        </div>
      </SelectContent>
    </Select>
  );
};

export default DoubleSlider;
