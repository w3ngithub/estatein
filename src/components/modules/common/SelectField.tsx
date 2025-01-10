import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectFieldProps {
  placeholder: string;
  data: { value: string; selectFieldData: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

const SelectField = ({
  placeholder,
  data,
  value,
  onChange,
}: SelectFieldProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-16 max-desktop-lg:h-14 border border-grey-15 dark:bg-grey-shade-10">
        {/* <SelectValue placeholder={placeholder} /> */}
        <SelectValue placeholder={placeholder}>
          {value
            ? data.find((item) => item.value === value)?.selectFieldData
            : placeholder}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {data?.map((item) => {
          return (
            <SelectItem key={item.value} value={item.value}>
              {item.selectFieldData}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectField;
