import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const InputField = () => {
  return (
    <RadioGroup defaultValue="option-one" className="flex flex-row">
      <div className="flex items-center gap-3 w-[100%] max-w-sm px-4 py-3 bg-[#E4E4E7] dark:bg-[#1C1C1C] rounded-lg">
        <div>
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 3.5C0 1.84315 1.34315 0.5 3 0.5H4.37163C5.232 0.5 5.98197 1.08556 6.19064 1.92025L7.29644 6.34343C7.47941 7.0753 7.20594 7.84555 6.60242 8.29818L5.3088 9.2684C5.17447 9.36915 5.14527 9.51668 5.183 9.61969C6.31851 12.7195 8.78051 15.1815 11.8803 16.317C11.9833 16.3547 12.1309 16.3255 12.2316 16.1912L13.2018 14.8976C13.6545 14.2941 14.4247 14.0206 15.1566 14.2036L19.5798 15.3094C20.4144 15.518 21 16.268 21 17.1284V18.5C21 20.1569 19.6569 21.5 18 21.5H15.75C7.05151 21.5 0 14.4485 0 5.75V3.5Z"
              fill="white"
            />
          </svg>
        </div>

        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-1 bg-transparent dark:text-white dark:placeholder:text-gray-400 focus:outline-none text-sm"
        />

        <div className="p-2 rounded-full">
          <RadioGroupItem value="option-one" id="option-one" className="" />
        </div>
      </div>
      <div className="flex items-center gap-3 w-[85%] max-w-sm px-4 py-3 bg-[#E4E4E7] dark:bg-[#1C1C1C] rounded-lg">
        <div>
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 5.6691V14.25C0.75 15.9069 2.09315 17.25 3.75 17.25H18.75C20.4069 17.25 21.75 15.9069 21.75 14.25V5.6691L12.8223 11.1631C11.8581 11.7564 10.6419 11.7564 9.67771 11.1631L0.75 5.6691Z"
              fill="white"
            />
            <path
              d="M21.75 3.90783V3.75C21.75 2.09315 20.4069 0.75 18.75 0.75H3.75C2.09315 0.75 0.75 2.09315 0.75 3.75V3.90783L10.4639 9.88558C10.946 10.1823 11.554 10.1823 12.0361 9.88558L21.75 3.90783Z"
              fill="white"
            />
          </svg>
        </div>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-1 bg-transparent dark:text-white dark:placeholder:text-gray-400 focus:outline-none text-sm"
        />

        <div className="p-2 rounded-full">
          <RadioGroupItem value="option-two" id="option-two" />
        </div>
      </div>
    </RadioGroup>
  );
};

export default InputField;
