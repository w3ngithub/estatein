const CustomersCard = () => {
  return (
    <div className="relative flex flex-row gap-3 z-50 max-mobile-md:flex-wrap max-mobile-md:flex-grow max-mobile-md:justify-between max-mobile-extra-md:flex-nowrap max-mobile-extra-md:flex-col max-mobile-extra-md:w-full">
      {/* 1 */}
      <div className="flex flex-col gap-5 border-2 border-[#E4E4E7] dark:border-grey-shade-15 dark:bg-grey-shade-10 rounded-md p-2 px-4 max-mobile-md:items-center max-mobile-md:justify-center">
        <h1 className="text-4xl font-bold max-desktop-2xl:text-3xl max-mobile-md:text-2xl dark:text-white pt-1">
          200+
        </h1>
        <p className="dark:text-grey-shade-60 text-lg max-desktop-2xl:text-base max-mobile-md:text-sm">
          Happy Customers
        </p>
      </div>
      {/* 2 */}
      <div className="flex flex-col gap-5 border-2 border-[#E4E4E7] dark:border-grey-shade-15 dark:bg-grey-shade-10 rounded-md p-2 px-4 max-mobile-md:items-center max-mobile-md:justify-center">
        <h1 className="text-4xl font-bold max-desktop-2xl:text-3xl max-mobile-md:text-2xl dark:text-white pt-1">
          10k+
        </h1>
        <p className="dark:text-grey-shade-60 text-lg max-desktop-2xl:text-base">
          Properties For Clients
        </p>
      </div>
      {/* 3 */}
      <div className="flex flex-col gap-5 border-2 dark:border-grey-shade-15 dark:bg-grey-shade-10 rounded-md p-2 px-4 max-mobile-md:flex-grow max-mobile-md:items-center max-mobile-md:justify-center">
        <h1 className="text-4xl font-bold max-desktop-2xl:text-3xl max-mobile-md:text-2xl dark:text-white pt-1">
          16+
        </h1>
        <p className="dark:text-grey-shade-60 text-lg max-desktop-2xl:text-base">
          Years of Experience
        </p>
      </div>
    </div>
  );
};
export default CustomersCard;
