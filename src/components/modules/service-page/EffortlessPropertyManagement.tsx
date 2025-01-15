import { ThreeStars } from "@/svgs/HomePageSvg";
import React from "react";
import UnlockPropertyCard from "../common/UnlockPropertyCard";
import {
  BarIcon,
  FinanceIcon,
  LegalIcon,
  MaintenanceIcon,
  PieIcon,
  SpeakerIcon,
  StackIcon,
  TenantIcon,
} from "@/svgs/ServicePageSvg";
import UnlockPropertyBanner from "../common/UnlockPropertyBanner";

const EffortlessPropertyManagement = () => {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-10">
        {/* first row */}
        <div className="flex flex-col gap-3">
          <div>
            <ThreeStars />
          </div>
          <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
            Effortless Property Management
          </h1>
          <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            Owning a property should be a pleasure, not a hassle. Estatein's
            Property Management Service takes the stress out of property
            ownership, offering comprehensive solutions tailored to your needs.
            Explore the categories below to see how we can make property
            management effortless for you
          </p>
        </div>
        {/* second row */}
        <div className="flex flex-col gap-4">
          <div className="grid tablet-lg:grid-cols-3 gap-4">
            <UnlockPropertyCard
              title="Tenant Harmony"
              description="Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
              icon={<TenantIcon />}
            />
            <UnlockPropertyCard
              title="Maintenance Ease"
              description="Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
              icon={<MaintenanceIcon />}
            />
            <UnlockPropertyCard
              title="Financial Peace of Mind"
              description="Managing property finances can be complex. Our financial experts take care of rent collection"
              icon={<FinanceIcon />}
            />
          </div>
          <div className="grid tablet-lg:grid-cols-3 gap-4">
            <div className="tablet-lg:col-span-1">
              <UnlockPropertyCard
                title="Legal Guardian"
                description="Stay compliant with property laws and regulations effortlessly."
                icon={<LegalIcon />}
              />
            </div>
            <div className="tablet-lg:col-span-2">
              <UnlockPropertyBanner
                title="Experience Effortless Property Management"
                description="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
                url="/property"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffortlessPropertyManagement;
