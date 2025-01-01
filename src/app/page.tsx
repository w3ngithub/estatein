import Hero from "@/components/modules/home-page/Hero";
import HeroCard from "@/components/modules/home-page/HeroCard";

export default function Home() {
  return (
    <>
      <div className="bg-grey-shade-10">
        <Hero />
      </div>
      <HeroCard />
    </>
  );
}
