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
      <SelectTrigger className="h-16 max-desktop-lg:h-14">
        <SelectValue placeholder={placeholder} />
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
