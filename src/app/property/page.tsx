import Loading from "@/components/elements/Loading";
import ContactForm from "@/components/modules/property-page/ContactForm";
import DiscoveredProperty from "@/components/modules/property-page/DiscoverPossibility";
import DreamProperty from "@/components/modules/property-page/DreamProperty";
import { Suspense } from "react";

const page = () => {
  return (
    <div className="bg-white-95 dark:bg-grey-shade-8">
      <div id="category">
        <DreamProperty />
      </div>
      <Suspense fallback={<Loading />}>
        <div id="portfolio">
          <DiscoveredProperty />
        </div>
      </Suspense>
      <ContactForm />
    </div>
  );
};

export default page;
