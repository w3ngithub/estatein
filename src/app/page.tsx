import ClientsReview from "@/components/modules/home-page/ClientsReview";
import Faq from "@/components/modules/home-page/Faq";
import Hero from "@/components/modules/home-page/Hero";
import HeroCard from "@/components/modules/home-page/HeroCard";

export default function Home() {
  return (
    <>
      <div className="bg-grey-shade-10">
        <Hero />
        <HeroCard />
        <div className="bg-grey-shade-8">
          <ClientsReview />
          <Faq />
        </div>
      </div>
    </>
  );
}
