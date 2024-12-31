import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CustomersCard from "../common/CustomersCard";

const Hero = () => {
  return (
    <section>
      <div className="grid mobile-xl:grid-cols-2 bg-grey-shade-10">
        <div className="flex flex-col items-start justify-center gap-8 border border-red-500">
          <h1 className="max-w-[610px] leading-tight font-semibold text-6xl max-desktop-2xl:text-5xl max-desktop-2xl:leading-snug max-mobile-lg:text-3xl text-white border border-red-500">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="max-w-[610px] text-lg leading-6 max-desktop-2xl:text-base text-grey-shade-60 border border-red-500">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
          <div className="flex flex-row items-center gap-4 text-white border border-red-500">
            <Link href="/">
              <li className="border-2 border-grey-shade-15 bg-grey-shade-10 py-3 px-4 rounded-md list-none text-lg max-desktop-2xl:text-sm">
                Learn More
              </li>
            </Link>
            <Button className="py-3 px-4text-lg bg-purple-shade-60 rounded-md hover:bg-purple-shade-d60 max-desktop-2xl:text-sm h-full">
              Browse Properties
            </Button>
          </div>
          <div>
            <CustomersCard />
          </div>
        </div>
        <div className="border border-red-500">
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
