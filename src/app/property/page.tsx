import ContactForm from "@/components/modules/property-page/ContactForm";
import DiscoveredProperty from "@/components/modules/property-page/DiscoverPossibility";

const page = () => {
  return (
    <div className="bg-white-95 dark:bg-grey-shade-8">
      <DiscoveredProperty />
      <ContactForm />
    </div>
  );
};

export default page;
