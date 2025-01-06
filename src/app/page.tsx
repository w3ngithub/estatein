import ClientsReview from "@/components/modules/home-page/ClientsReview";
import Faq from "@/components/modules/home-page/Faq";
import FeaturedProperty from "@/components/modules/home-page/FeaturedProperty";
import Hero from "@/components/modules/home-page/Hero";
import HeroCard from "@/components/modules/home-page/HeroCard";
import HeroNew from "@/components/modules/home-page/HeroNew";

export default function Home() {
  return (
    <>
      <div className="dark:bg-grey-shade-10">
        <HeroNew />
        {/* <HeroCard /> */}
        {/* <Hero /> */}
        <div className="dark:bg-grey-shade-8">
          {/* <ClientsReview /> */}
          {/* <Faq /> */}
          {/* <FeaturedProperty /> */}
        </div>
      </div>
    </>
  );
}
