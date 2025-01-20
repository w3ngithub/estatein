import { Button } from "@/components/ui/button";
import { ClientThunderIcon, SudokuIcon } from "@/svgs/AboutUsSvg";
import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";

const OurClients = () => {
  return (
    <section className="container py-10">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-3">
          {/* 3 star logo */}
          <div>
            <ThreeStars />
          </div>
          <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
            Our Valued Clients
          </h1>
          <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            At Estatein, we have had the privilege of working with a diverse
            range of clients across various industries. Here are some of the
            clients we've had the pleasure of serving
          </p>
        </div>
        {/* card */}
        {/* single card:- see our achievement section to make single card */}
        <div className="">
          <div className="">
            <div className="flex flex-col gap-10">
              <div className="flex flex-row justify-between gap-2">
                <div>
                  <p
                    className="text-grey-shade-60 font-medium text-lg
                  "
                  >
                    Since 2019
                  </p>
                  <h1 className="font-semibold text-3xl">ABC Corporation</h1>
                </div>
                <Button>Visit Website</Button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {/* first  */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-2 items-center">
                    <div>
                      <SudokuIcon />
                    </div>
                    <p className="text-grey-shade-60 font-medium text-lg">
                      Domain
                    </p>
                  </div>
                  <h1 className="font-medium text-xl">
                    Commercial Real Estate
                  </h1>
                </div>
                {/* second */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-2 items-center">
                    <div>
                      <ClientThunderIcon />
                    </div>
                    <p className="text-grey-shade-60 font-medium text-lg">
                      Category
                    </p>
                  </div>
                  <h1 className="font-medium text-xl">
                    Luxury Home Development
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-3 border border-grey-shade-15 p-5">
                <p className="text-grey-shade-60 text-lg font-medium">
                  What They Said 🤗
                </p>
                <p className="font-medium text-lg">
                  Estatein's expertise in finding the perfect office space for
                  our expanding operations was invaluable. They truly understand
                  our business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
