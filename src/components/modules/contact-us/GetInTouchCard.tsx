import { GoToArrowLogo } from "@/svgs/HomePageSvg";
import Link from "next/link";

const GetInTouchCard = ({ data }) => {
  return (
    <section className="p-4">
      <div className="grid grid-cols-2 gap-4 tablet-sm:grid-cols-4">
        {data.map((card, index) => (
          <div
            key={index}
            className="border-2 border-white-d1 dark:border-grey-shade-15 dark:bg-grey-shade-10 rounded-md flex flex-col"
          >
            {/* Top Right Arrow */}
            <div className="flex justify-end items-center pt-4 pr-4 hover:cursor-pointer">
              <Link href={card.link}>
                <GoToArrowLogo />
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 p-3 flex-grow">
              <div className="flex items-center justify-center max-desktop-lg:h-[60px] max-desktop-lg:w-[60px] max-desktop-lg:gap-4">
                {card.icon}
              </div>

              {/* Text */}
              {!card.socialMedia && (
                <p className="dark:text-white font-semibold text-lg text-center max-desktop-lg:text-base max-tablet-sm:text-sm">
                  {card.text}
                </p>
              )}

              {/* Social Media Section (if present) */}
              {card.socialMedia && (
                <div className="flex flex-row gap-3">
                  {card.socialMedia.map((social, idx) => (
                    <p
                      key={idx}
                      className="dark:text-white font-semibold text-lg text-center max-desktop-lg:text-base max-tablet-sm:text-sm"
                    >
                      {social}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetInTouchCard;
