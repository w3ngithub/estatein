import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";

const Achievements = () => {
  const cardItems = [
    {
      id: 1,
      title: "3+ Years of Excellence",
      description:
        "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
    },
    {
      id: 2,
      title: "Happy Clients",
      description:
        "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
    },
    {
      id: 3,
      title: "Industry Recognition",
      description:
        "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
    },
  ];

  return (
    <section className="container py-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          {/* 3 star logo */}
          <div>
            <ThreeStars />
          </div>
          <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
            Our Achievements
          </h1>
          <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
        {/* card */}
        <div className="grid mobile-xl:grid-cols-3 mobile-xl:space-x-4 max-mobile-xl:gap-5">
          {cardItems.map((item) => (
            <div
              key={item.id}
              className="p-2 border border-white-d1 dark:bg-grey-shade-d61 rounded-lg"
            >
              <div className="dark:bg-grey-shade-8 rounded-lg h-full">
                <div className="flex flex-col gap-5 p-8">
                  <h2 className="font-semibold text-3xl dark:text-white max-desktop-lg:text-xl max-tablet-sm:text-lg">
                    {item.title}
                  </h2>
                  <p className="dark:text-grey-shade-60 font-medium text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
