import ContactForm from "@/components/modules/property-page/ContactForm";
import DiscoveredProperty from "@/components/modules/property-page/DiscoverPossibility";
import DreamProperty from "@/components/modules/property-page/DreamProperty";

const page = () => {
  return (
    <div className="bg-white-95 dark:bg-grey-shade-8">
      <DreamProperty />
      <DiscoveredProperty />
      <ContactForm />
    </div>
  );
};

export default page;
