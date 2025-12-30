"use client";

import Image from "next/image";
import Nav from "@/components/sections/nav";
import Footer from "@/components/sections/footer";

export default function CommunityEventsPage() {
  return (
    <div className="font-sans flex-col flex w-screen relative scroll-smooth overflow-x-hidden">
      <Nav />
      <div className="relative bg-[url('/backgroundBlue.png')] bg-cover bg-center min-h-screen">
        <div className="pt-24 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl mb-4">
                Community Events
              </h1>
              <p className="text-lg text-blue-900/70 max-w-2xl mx-auto leading-relaxed">
                Building stronger connections and fostering community engagement through meaningful events
              </p>
            </div>

            {/* Community Events Section */}
            <section className="mb-12">
              <div className="bg-blue-50/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 shadow-lg">
                <p className="text-center text-blue-900/70 text-lg">No upcoming events at this time.</p>
              </div>
            </section>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 top-0 -z-10 opacity-20">
          <Image
            src="/leftStackBlue.png"
            alt=""
            width={150}
            height={300}
            className="opacity-30"
            aria-hidden="true"
          />
        </div>
        <div className="absolute right-0 bottom-0 -z-10 opacity-20">
          <Image
            src="/leftStack.png"
            alt=""
            width={150}
            height={300}
            className="opacity-30 transform scale-x-[-1]"
            aria-hidden="true"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}



