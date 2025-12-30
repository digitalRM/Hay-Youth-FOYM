"use client";

import Image from "next/image";
import Nav from "@/components/sections/nav";
import Footer from "@/components/sections/footer";


// Youth Concert Categories - these are categories, not individual events
const youthConcertCategories = [
  {
    title: "Lunar New Year Youth Concert",
    description: "We organize this event to bring people together through music, food, and cultural celebration. Each year, more than 100 attendees join us to enjoy the festivities. We decorate the venue, share diverse cultural traditions, and strengthen connections within the community. This event fosters communication, creates a sense of belonging, and especially supports immigrants in building strong ties with the community.",
  },
  {
    title: "Family Ties in Harmony",
    description: "Every year, we host youth events at Third Place Commons with special themes for occasions like Mother's Day and Father's Day. These events strengthen family connections, showcase youth appreciation for family and community, and highlight their contributions. Through music and performances, youth entertain and enrich the public space, bringing melody and joy to the community.",
  },
  {
    title: "Youth Melody for Seniors",
    description: "The youth group performs regularly at the Senior Center, especially during holidays. They bring festive music during the holiday season and provide entertainment that brightens the lives of seniors.",
  },
];

// Community Events - empty for now
const communityEvents: EventButtonProps[] = [];

interface EventButtonProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}


export default function EventsPage() {
  return (
    <div className="font-sans flex-col flex w-screen relative scroll-smooth overflow-x-hidden">
      <Nav />
      <div className="relative bg-[url('/backgroundBlue.png')] bg-cover bg-center min-h-screen">
        <div className="pt-24 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl mb-4">
                Youth Concert Programs
              </h1>
              <p className="text-lg text-blue-900/70 max-w-2xl mx-auto leading-relaxed">
                Discover the various ways HAY Youth connects with and serves our community through music
              </p>
            </div>

            {/* Lunar New Year Youth Concert Section */}
            <section id="lunar-new-year" className="mb-20 scroll-mt-24">
              <div className="bg-blue-50/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 shadow-lg">
                <h2 className="text-5xl font-semibold text-blue-950 text-left mb-6">Lunar New Year Youth Concert</h2>
                <p className="text-base text-blue-900/80 leading-relaxed mb-8">
                  We organize this event to bring people together through music, food, and cultural celebration. Each year, more than 100 attendees join us to enjoy the festivities. We decorate the venue, share diverse cultural traditions, and strengthen connections within the community. This event fosters communication, creates a sense of belonging, and especially supports immigrants in building strong ties with the community.
                </p>
                <p className="text-center text-blue-900/70 text-lg">No upcoming events at this time.</p>
              </div>
            </section>

            {/* Family Ties in Harmony Section */}
            <section id="family-ties" className="mb-20 scroll-mt-24">
              <div className="bg-blue-50/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 shadow-lg">
                <h2 className="text-5xl font-semibold text-blue-950 text-left mb-6">Family Ties in Harmony</h2>
                <p className="text-base text-blue-900/80 leading-relaxed mb-8">
                  Every year, we host youth events at Third Place Commons with special themes for occasions like Mother's Day and Father's Day. These events strengthen family connections, showcase youth appreciation for family and community, and highlight their contributions. Through music and performances, youth entertain and enrich the public space, bringing melody and joy to the community.
                </p>
                <p className="text-center text-blue-900/70 text-lg">No upcoming events at this time.</p>
              </div>
            </section>

            {/* Youth Melody for Seniors Section */}
            <section id="youth-melody" className="mb-12 scroll-mt-24">
              <div className="bg-blue-50/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 shadow-lg">
                <h2 className="text-5xl font-semibold text-blue-950 text-left mb-6">Youth Melody for Seniors</h2>
                <p className="text-base text-blue-900/80 leading-relaxed mb-8">
                  The youth group performs regularly at the Senior Center, especially during holidays. They bring festive music during the holiday season and provide entertainment that brightens the lives of seniors.
                </p>
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

