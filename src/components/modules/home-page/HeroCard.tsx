import { heroCard } from "@/utilityComponents/homePage/heroCard";

const HeroCard = () => {
  return (
    <section className="p-4">
      <div className="grid grid-cols-2 gap-4 tablet-sm:grid-cols-4">
        {heroCard.map((card, index) => (
          <div
            key={index}
            className="border-2 border-grey-shade-15 bg-grey-shade-10 rounded-md flex flex-col"
          >
            <div className="flex justify-end items-center pt-4 pr-4 hover:cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-tablet-sm:h-[16px] max-tablet-sm:w-[16px]"
              >
                <path
                  d="M1.375 22.625L22.625 1.375M22.625 1.375L6.6875 1.375M22.625 1.375V17.3125"
                  stroke="#4D4D4D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 p-3 flex-grow">
              <div className="flex items-center justify-center max-desktop-lg:h-[60px] max-desktop-lg:w-[60px] max-desktop-lg:gap-4">
                {card.icon}
              </div>
              <p className="text-white font-semibold text-lg text-center max-desktop-lg:text-base max-tablet-sm:text-sm">
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
