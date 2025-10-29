"use server";

import Members from "@/components/sections/members";
import Footer from "@/components/sections/footer";
import Nav from "@/components/sections/nav";

export default async function MembersPage() {
  return (
    <div className="font-sans flex-col flex w-screen relative scroll-smooth overflow-x-hidden">
      <Nav />
      <Members />
      <Footer />
    </div>
  );
}
