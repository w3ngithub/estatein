import ClientsReview from "@/components/modules/home-page/ClientsReview";
import Faq from "@/components/modules/home-page/Faq";
import FeaturedProperty from "@/components/modules/home-page/FeaturedProperty";
import Hero from "@/components/modules/home-page/Hero";
import HeroCard from "@/components/modules/home-page/HeroCard";
import { heroCard } from "@/utilityComponents/homePage/heroCard";

export default function Home() {
  return (
    <div className="bg-white-95 dark:bg-grey-shade-10">
      <div id="hero">
        <Hero />
      </div>
      <HeroCard data={heroCard} />
      <div className="dark:bg-grey-shade-8">
        <div id="features">
          <FeaturedProperty />
        </div>
        <div id="testimonials">
          <ClientsReview />
        </div>
        <div id="faqs">
          <Faq />
        </div>
      </div>
    </div>
  );
}
