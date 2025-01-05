import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CustomersCard from "../common/CustomersCard";

const Hero = () => {
  return (
    <section className="container bg-grey-shade-10 border border-red-500">
      <div className="grid tablet-lg:grid-cols-2">
        <div className="relative">
          <div className="flex justify-end">
            <Image
              src={`${
                process.env.NEXT_PUBLIC_BASE_PATH + "/images/hero-building.png"
              }`}
              width={920}
              height={632}
              alt="Hero icon"
              priority
            />
            {/* logo */}
            <div className="absolute top-[20%] left-[-5%]">
              <Image
                src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH + "/images/hero-logo.png"
                }`}
                width={129}
                height={129}
                alt="Hero Logo"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
