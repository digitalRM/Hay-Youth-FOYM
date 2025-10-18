"use server";
import ContactUs from "@/components/sections/contact";
import CTA from "@/components/sections/cta";
import Hero from "@/components/sections/hero";
import JoinUs from "@/components/sections/join-us";
import WhatWeOffer from "@/components/sections/what-we-offer";
import Footer from "@/components/sections/footer";

export default async function Home() {
  return (
    <div className="font-sans flex-col flex w-screen relative scroll-smooth overflow-x-hidden">
      <Hero />
      <JoinUs />
      <WhatWeOffer />
      <ContactUs />
      <CTA />
      <Footer />
    </div>
  );
}
