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
  svgIcon?: React.ReactNode;
}

const SelectFieldWithIcon = ({
  placeholder,
  data,
  value,
  onChange,
  svgIcon,
}: SelectFieldProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-16 max-desktop-lg:h-14 border border-grey-15 dark:bg-grey-shade-8">
        <div className="border-r border-grey-shade-15 pr-3">{svgIcon}</div>
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

export default SelectFieldWithIcon;
