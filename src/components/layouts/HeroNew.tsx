import Link from "next/link";
import { Button } from "../ui/button";
import CustomersCard from "../modules/common/CustomersCard";
import Image from "next/image";

const HeroNew = () => {
  return (
    <div className="h-[80vh] border border-red-500">
      <div className="relative border border-red-500 w-full h-full">
        <div className="grid container grid-cols-2">
          <div className="h-full">
            <div className="h-full">
              <div className="flex flex-col items-start justify-center gap-8 mt-5">
                <h1 className="max-w-[610px] leading-tight font-semibold text-6xl max-desktop-2xl:text-5xl max-desktop-2xl:leading-snug max-mobile-lg:text-3xl text-white">
                  Discover Your Dream Property with Estatein
                </h1>
                <p className="max-w-[610px] text-lg leading-6 max-desktop-2xl:text-base text-grey-shade-60">
                  Your journey to finding the perfect property begins here.
                  Explore our listings to find the home that matches your
                  dreams.
                </p>
                <div className="flex flex-row items-center gap-4 text-white">
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
            </div>
          </div>
          <div className="bg-lime-300 z-100 w-1/2 absolute right-0 h-full">
            <div className="border-2 border-yellow-400 w-full h-full">
              <Image
                src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH +
                  "/images/hero-building.png"
                }`}
                // width={920}
                // height={632}
                alt="Hero icon"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroNew;
