import Hero from "@/components/sections/hero";
import JoinUs from "@/components/sections/join-us";

export default function Home() {
  return (
    <div className="font-sans flex-col flex w-screen relative scroll-smooth overflow-x-hidden">
      <Hero />
      <JoinUs />
    </div>
  );
}
