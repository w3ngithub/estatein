import React from "react";

interface UnlockPropertyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const UnlockPropertyCard = ({
  title,
  description,
  icon,
}: UnlockPropertyCardProps) => {
  return (
    <div className="flex flex-col gap-5 border border-grey-shade-15 rounded-lg p-8">
      <div className="flex flex-row items-center gap-3">
        <div className="flex items-center justify-center max-desktop-lg:h-[60px] max-desktop-lg:w-[60px] max-desktop-lg:gap-4">
          {icon}
        </div>
        <h1 className="font-semibold text-2xl max-desktop-lg:text-xl max-tablet-sm:text-lg">
          {title}
        </h1>
      </div>
      <p className="text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
        {description}
      </p>
    </div>
  );
};

export default UnlockPropertyCard;
