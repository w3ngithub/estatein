const CustomersCard = () => {
  return (
    <div className="relative flex flex-row gap-3 z-50">
      {/* 1 */}
      <div className="flex flex-col gap-5 border-2 border-grey-shade-15 bg-grey-shade-10 rounded-md p-2 px-4">
        <h1 className="text-4xl font-bold max-desktop-2xl:text-3xl text-white pt-1">
          200+
        </h1>
        <p className="text-grey-shade-60 text-lg max-desktop-2xl:text-base">
          Happy Customers
        </p>
      </div>
      {/* 2 */}
      <div className="flex flex-col gap-5 border-2 border-grey-shade-15 bg-grey-shade-10 rounded-md p-2 px-4">
        <h1 className="text-4xl font-bold max-desktop-2xl:text-3xl text-white pt-1">
          10k+
        </h1>
        <p className="text-grey-shade-60 text-lg max-desktop-2xl:text-base">
          Properties For Clients
        </p>
      </div>
      {/* 3 */}
      <div className="flex flex-col gap-5 border-2 border-grey-shade-15 bg-grey-shade-10 rounded-md p-2 px-4">
        <h1 className="text-4xl font-bold max-desktop-2xl:text-3xl text-white pt-1">
          16+
        </h1>
        <p className="text-grey-shade-60 text-lg max-desktop-2xl:text-base">
          Years of Experience
        </p>
      </div>
    </div>
  );
};
export default CustomersCard;
