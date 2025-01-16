import { Button } from "../../ui/button";

const ExploreProperty = () => {
  return (
    <div className="bg-contain bg-no-repeat bg-right-bottom bg-explore-right-img">
      <div className="bg-contain bg-no-repeat bg-left-bottom bg-explore-left-img">
        <div className="container py-8 bg-white-95 dark:bg-transparent">
          <div className="flex flex-row justify-between items-center gap-2 max-mobile-lg:flex-col max-mobile-lg:gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
                Start Your Real Estate Journey Today
              </h1>
              <p className="max-w-[900px] dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
                Your dream property is just a click away. Whether you&apos;re
                looking for a new home, a strategic investment, or expert real
                estate advice, Estatein is here to assist you every step of the
                way. Take the first step towards your real estate goals and
                explore our available properties or get in touch with our team
                for personalized assistance.
              </p>
            </div>
            <div className="max-mobile-lg:w-full">
              <Button className="bg-purple-shade-60 hover:bg-purple-shade-d60 py-6 px-4 font-medium rounded-md max-desktop-lg:text-sm max-mobile-lg:w-full dark:text-white">
                Explore Properties
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExploreProperty;
