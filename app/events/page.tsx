"use client";

import Image from "next/image";
import Nav from "@/components/sections/nav";
import Footer from "@/components/sections/footer";


// Youth Concert events - 3 specific events
const youthConcertEvents = [
  { 
    title: "Lunar New Year Youth Concert", 
    description: "We organize this event to bring people together through music, food, and cultural celebration. Each year, more than 100 attendees join us to enjoy the festivities. We decorate the venue, share diverse cultural traditions, and strengthen connections within the community. This event fosters communication, creates a sense of belonging, and especially supports immigrants in building strong ties with the community.", 
    image: "/1.png", 
    slug: "lunar-new-year-youth-concert" 
  },
  { 
    title: "Family Ties in Harmony", 
    description: "Every year, we host youth events at Third Place Commons with special themes for occasions like Mother's Day and Father's Day. These events strengthen family connections, showcase youth appreciation for family and community, and highlight their contributions. Through music and performances, youth entertain and enrich the public space, bringing melody and joy to the community.", 
    image: "/2.png", 
    slug: "family-ties-in-harmony" 
  },
  { 
    title: "Youth Melody for Seniors", 
    description: "The youth group performs regularly at the Senior Center, especially during holidays. They bring festive music during the holiday season and provide entertainment that brightens the lives of seniors.", 
    image: "/3.png", 
    slug: "youth-melody-for-seniors" 
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

function EventButton({ title, description, image, slug }: EventButtonProps) {
  return (
    <a href={`/events/${slug}`} className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-md hover:shadow-xl hover:border-white/40 transition-all duration-300 overflow-hidden hover:scale-[1.02] w-full aspect-square flex flex-col">
      <div className="relative h-3/5 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col justify-center flex-1 bg-white/50">
        <h3 className="text-xl font-semibold text-blue-950 mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-blue-900/70 line-clamp-2">{description}</p>
      </div>
    </a>
  );
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
                Our Events
              </h1>
              <p className="text-lg text-blue-900/70 max-w-2xl mx-auto leading-relaxed">
                Discover the various ways HAY Youth connects with and serves our community
              </p>
            </div>

            {/* Youth Concert Section */}
            <section id="youth-concert" className="mb-20 scroll-mt-24">
              <div className="bg-blue-50/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 shadow-lg">
                <h2 className="text-5xl font-semibold text-blue-950 text-left mb-12">Youth Concert</h2>
                
                {/* Events Grid - 3 per row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {youthConcertEvents.map((event, idx) => (
                    <EventButton key={idx} {...event} />
                  ))}
                </div>
              </div>
            </section>

            {/* Community Events Section */}
            <section id="community-events" className="mb-12 scroll-mt-24">
              <div className="bg-blue-50/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 shadow-lg">
                <h2 className="text-5xl font-semibold text-blue-950 text-left mb-12">Community Events</h2>
                
                {/* Events Grid - 3 per row */}
                {communityEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {communityEvents.map((event, idx) => (
                      <EventButton key={idx} {...event} />
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-blue-900/70 text-lg">No events available at this time.</p>
                )}
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

