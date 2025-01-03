const HeroNew = () => {
  return (
    <>
      <div className="bg-purple-300 relative">
        <div className="grid container px-0 grid-cols-2 h-[600px] bg-orange-300">
          <div className="bg-red-300 h-full">
            <div className="h-full bg-blue-300"></div>
          </div>
          <div className="bg-lime-300 z-100 w-1/2 absolute right-0 h-full"></div>
        </div>
      </div>
    </>
  );
};
export default HeroNew;
