"use client";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

interface DoubleSliderProps {
  placeholder: string;
  svgIcon?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
}

const DoubleSlider = ({
  placeholder,
  svgIcon,
  value,
  onChange,
}: DoubleSliderProps) => {
  const [values, setValues] = useState<number[]>([1000, 900000]);

  // Parse initial value from URL parameter
  useEffect(() => {
    if (value) {
      try {
        const parsedValues = value.split("-").map(Number);
        if (parsedValues.length === 2) {
          setValues(parsedValues);
        }
      } catch (error) {
        console.error("Error parsing price range", error);
      }
    }
  }, [value]);

  // Handle value changes
  const handleValueChange = (newValues: number[]) => {
    setValues(newValues);

    // Convert to string for URL parameter
    if (onChange) {
      onChange(`${newValues[0]}-${newValues[1]}`);
    }
  };

  const formatThousands = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value.toString();
  };

  return (
    <Select>
      <SelectTrigger className="h-16 max-desktop-lg:h-14 border border-grey-15 dark:bg-grey-shade-8">
        <div className="border-r border-grey-shade-15 pr-3">{svgIcon}</div>
        {/* <SelectValue placeholder={placeholder}>
          {`$${values[0]}K - $${values[1]}K`}
        </SelectValue> */}
        <SelectValue placeholder={placeholder}>
          {`${formatThousands(values[0])} - ${formatThousands(values[1])}`}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <div className="flex justify-center items-center h-36 p-5">
          {/* <DualRangeSlider
            label={(value) => <span className="text-white">{`${value}K`}</span>}
            value={values}
            // onValueChange={setValues}
            onValueChange={handleValueChange}
            min={10}
            max={900}
            step={10}
          /> */}
          <DualRangeSlider
            label={(value) => (
              <span className="text-white">{formatThousands(value ?? 0)}</span>
            )}
            value={values}
            onValueChange={handleValueChange}
            min={1000} // Start at 1000 (1K)
            max={900000} // 900K
            step={1000}
          />
        </div>
      </SelectContent>
    </Select>
  );
};

export default DoubleSlider;
