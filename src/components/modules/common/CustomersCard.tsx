const CustomersCard = () => {
  const customerData = [
    {
      id: 1,
      count: "200+",
      description: "Happy Customers",
    },
    {
      id: 2,
      count: "10k+",
      description: "Properties For Clients",
    },

    {
      id: 3,
      count: "16+",
      description: "Years of Experience",
    },
  ];

  return (
    <div className="relative flex flex-row gap-3 z-50 max-mobile-md:flex-wrap max-mobile-md:flex-grow max-mobile-md:justify-between max-mobile-extra-md:flex-nowrap max-mobile-extra-md:flex-col max-mobile-extra-md:w-full">
      {customerData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col flex-grow gap-5 border-2 border-white-d1 dark:border-grey-shade-15 dark:bg-grey-shade-10 rounded-md p-2 px-4 max-mobile-md:items-center max-mobile-md:justify-center"
        >
          <h1 className="text-4xl font-bold max-desktop-2xl:text-3xl max-mobile-md:text-2xl dark:text-white pt-1">
            {item.count}
          </h1>
          <p className="dark:text-grey-shade-60 text-lg max-desktop-2xl:text-base max-mobile-md:text-sm">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CustomersCard;
