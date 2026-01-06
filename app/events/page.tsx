"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/sections/nav";
import Footer from "@/components/sections/footer";
import { lunarNewYearEvents, familyTiesEvents, youthMelodyEvents } from "./eventsData";


export default function EventsPage() {
  return (
    <div className="font-sans flex-col flex w-screen relative scroll-smooth overflow-x-hidden">
      <Nav />
      <div className="relative bg-[url('/backgroundBlue.png')] bg-cover bg-center min-h-screen">
        <div className="pt-32 pb-16">
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
                
                {/* Events Grid */}
                {lunarNewYearEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {lunarNewYearEvents.map((event) => (
                      <Link key={event.id} href={`/events/event/${event.id}`} className="group">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-md hover:shadow-xl hover:border-white/40 transition-all duration-300 overflow-hidden">
                          <div className="relative w-full aspect-[3/4]">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4 bg-white/50">
                            <p className="text-sm font-semibold text-blue-950">Date: {event.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-blue-900/70 text-lg">No upcoming events at this time.</p>
                )}
              </div>
            </section>

            {/* Family Ties in Harmony Section */}
            <section id="family-ties" className="mb-20 scroll-mt-24">
              <div className="bg-blue-50/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 shadow-lg">
                <h2 className="text-5xl font-semibold text-blue-950 text-left mb-6">Family Ties in Harmony</h2>
                <p className="text-base text-blue-900/80 leading-relaxed mb-8">
                  Every year, we host youth events at Third Place Commons with special themes for occasions like Mother's Day and Father's Day. These events strengthen family connections, showcase youth appreciation for family and community, and highlight their contributions. Through music and performances, youth entertain and enrich the public space, bringing melody and joy to the community.
                </p>
                
                {/* Events Grid */}
                {familyTiesEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {familyTiesEvents.map((event) => (
                      <Link key={event.id} href={`/events/event/${event.id}`} className="group">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-md hover:shadow-xl hover:border-white/40 transition-all duration-300 overflow-hidden">
                          <div className="relative w-full aspect-[3/4]">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4 bg-white/50">
                            <p className="text-sm font-semibold text-blue-950">Date: {event.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-blue-900/70 text-lg">No upcoming events at this time.</p>
                )}
              </div>
            </section>

            {/* Youth Melody for Seniors Section */}
            <section id="youth-melody" className="mb-12 scroll-mt-24">
              <div className="bg-blue-50/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 shadow-lg">
                <h2 className="text-5xl font-semibold text-blue-950 text-left mb-6">Youth Melody for Seniors</h2>
                <p className="text-base text-blue-900/80 leading-relaxed mb-8">
                  The youth group performs regularly at the Senior Center, especially during holidays. They bring festive music during the holiday season and provide entertainment that brightens the lives of seniors.
                </p>
                
                {/* Events Grid */}
                {youthMelodyEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {youthMelodyEvents.map((event) => (
                      <Link key={event.id} href={`/events/event/${event.id}`} className="group">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-md hover:shadow-xl hover:border-white/40 transition-all duration-300 overflow-hidden">
                          <div className="relative w-full aspect-[3/4]">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4 bg-white/50">
                            <p className="text-sm font-semibold text-blue-950">Date: {event.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-blue-900/70 text-lg">No upcoming events at this time.</p>
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

