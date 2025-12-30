"use client";

import Image from "next/image";
import Nav from "@/components/sections/nav";
import Footer from "@/components/sections/footer";

// Event data structure - Easy to add more events!
// Just add new objects to the arrays with title, description, image path, and slug
const concertsData = {
  2023: [
    { title: "Spring Concert 2023", description: "Celebrating cultural diversity through music", image: "/1.png", slug: "spring-concert-2023" },
    { title: "Summer Music Festival", description: "Youth talents shine on stage", image: "/2.png", slug: "summer-music-festival-2023" },
  ],
  2024: [
    { title: "Winter Harmony Concert", description: "Holiday celebration with the community", image: "/3.png", slug: "winter-harmony-concert-2024" },
    { title: "Youth Music Showcase", description: "Featuring talented young musicians", image: "/1.png", slug: "youth-music-showcase-2024" },
  ],
  2025: [
    { title: "Spring Performance 2025", description: "New voices, new stories", image: "/2.png", slug: "spring-performance-2025" },
    { title: "Community Music Night", description: "Bringing people together through song", image: "/3.png", slug: "community-music-night-2025" },
  ],
  2026: [
    { title: "Upcoming Concert", description: "Stay tuned for more details", image: "/1.png", slug: "upcoming-concert-2026" },
  ],
};

const lecturesData = {
  2023: [
    { title: "Leadership Workshop", description: "Building tomorrow's leaders today", image: "/2.png", slug: "leadership-workshop-2023" },
    { title: "Academic Success Seminar", description: "Strategies for student achievement", image: "/3.png", slug: "academic-success-seminar-2023" },
  ],
  2024: [
    { title: "Career Pathways Talk", description: "Exploring future opportunities", image: "/1.png", slug: "career-pathways-talk-2024" },
    { title: "Community Service Forum", description: "Making a difference together", image: "/2.png", slug: "community-service-forum-2024" },
  ],
  2025: [
    { title: "Innovation in Education", description: "New approaches to learning", image: "/3.png", slug: "innovation-in-education-2025" },
    { title: "Youth Empowerment Series", description: "Inspiring the next generation", image: "/1.png", slug: "youth-empowerment-series-2025" },
  ],
  2026: [
    { title: "Upcoming Lecture", description: "More information coming soon", image: "/2.png", slug: "upcoming-lecture-2026" },
  ],
};

const communityEventsData = {
  2023: [
    { title: "Community Gathering 2023", description: "Building stronger connections", image: "/3.png", slug: "community-gathering-2023" },
    { title: "Youth Service Day", description: "Giving back to our community", image: "/1.png", slug: "youth-service-day-2023" },
  ],
  2024: [
    { title: "Cultural Festival", description: "Celebrating our diversity", image: "/2.png", slug: "cultural-festival-2024" },
    { title: "Leadership Summit", description: "Youth voices, community impact", image: "/3.png", slug: "leadership-summit-2024" },
  ],
  2025: [
    { title: "Spring Community Fair", description: "Fun, food, and friendship", image: "/1.png", slug: "spring-community-fair-2025" },
    { title: "Volunteer Appreciation", description: "Honoring our dedicated volunteers", image: "/2.png", slug: "volunteer-appreciation-2025" },
  ],
  2026: [
    { title: "Upcoming Event", description: "Details to be announced", image: "/3.png", slug: "upcoming-event-2026" },
  ],
};

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

interface YearSectionProps {
  year: number;
  events: EventButtonProps[];
}

function YearSection({ year, events }: YearSectionProps) {
  return (
    <div className="mb-16">
      <h3 className="text-3xl font-semibold text-blue-950 mb-8 text-center">{year}</h3>
      <div className="flex justify-center gap-8 flex-wrap">
        {events.map((event, idx) => (
          <div key={idx} className="w-[calc(33.333%-2rem)] min-w-[280px] max-w-[350px]">
            <EventButton {...event} />
          </div>
        ))}
      </div>
    </div>
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

            {/* Concerts Section */}
            <section id="concerts" className="mb-20 scroll-mt-24">
              <div className="bg-blue-50/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 shadow-lg">
                <h2 className="text-5xl font-semibold text-blue-950 text-left mb-12">Concerts</h2>
                
                {/* Events by Year */}
                <YearSection year={2026} events={concertsData[2026]} />
                <YearSection year={2025} events={concertsData[2025]} />
                <YearSection year={2024} events={concertsData[2024]} />
                <YearSection year={2023} events={concertsData[2023]} />
              </div>
            </section>

            {/* Lectures Section */}
            <section id="lectures" className="mb-20 scroll-mt-24">
              <div className="bg-blue-50/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 shadow-lg">
                <h2 className="text-5xl font-semibold text-blue-950 text-left mb-12">Lectures</h2>
                
                {/* Events by Year */}
                <YearSection year={2026} events={lecturesData[2026]} />
                <YearSection year={2025} events={lecturesData[2025]} />
                <YearSection year={2024} events={lecturesData[2024]} />
                <YearSection year={2023} events={lecturesData[2023]} />
              </div>
            </section>

            {/* Community Event Section */}
            <section id="community-event" className="mb-12 scroll-mt-24">
              <div className="bg-blue-50/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 shadow-lg">
                <h2 className="text-5xl font-semibold text-blue-950 text-left mb-12">Community Events</h2>
                
                {/* Events by Year */}
                <YearSection year={2026} events={communityEventsData[2026]} />
                <YearSection year={2025} events={communityEventsData[2025]} />
                <YearSection year={2024} events={communityEventsData[2024]} />
                <YearSection year={2023} events={communityEventsData[2023]} />
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

