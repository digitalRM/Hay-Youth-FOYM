"use server";

import Volunteer from "@/components/sections/volunteer";
import Footer from "@/components/sections/footer";
import Nav from "@/components/sections/nav";

export default async function VolunteerPage() {
  return (
    <div className="font-sans flex-col flex w-screen relative scroll-smooth overflow-x-hidden">
      <Nav />
      <Volunteer />
      <Footer />
    </div>
  );
}





