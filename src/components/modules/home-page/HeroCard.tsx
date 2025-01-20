import { GoToArrowLogo } from "@/svgs/HomePageSvg";
import Link from "next/link";

interface HeroCardData {
  icon: React.ReactNode;
  title: string;
}

interface HeroCardProps {
  data: HeroCardData[];
}

const HeroCard = ({ data }: HeroCardProps) => {
  return (
    <section className="p-4">
      <div className="grid grid-cols-2 gap-4 tablet-sm:grid-cols-4">
        {data.map((card, index) => (
          <div
            key={index}
            className="border-2 border-white-d1 dark:border-grey-shade-15 dark:bg-grey-shade-10 rounded-md flex flex-col"
          >
            <div className="flex justify-end items-center pt-4 pr-4 hover:cursor-pointer">
              <Link href="/property">
                <GoToArrowLogo />
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 p-3 flex-grow">
              <div className="flex items-center justify-center max-desktop-lg:h-[60px] max-desktop-lg:w-[60px] max-desktop-lg:gap-4">
                {card.icon}
              </div>
              <p className="dark:text-white font-semibold text-lg text-center max-desktop-lg:text-base max-tablet-sm:text-sm">
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroCard;
