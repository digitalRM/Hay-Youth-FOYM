"use client";

import { use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Nav from "@/components/sections/nav";
import Footer from "@/components/sections/footer";

// Import all event data - this should match the data from the main events page
const allEvents = {
  concerts: {
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
  },
  lectures: {
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
  },
  community: {
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
  },
};

// Helper function to find an event by slug
function findEventBySlug(slug: string) {
  for (const category of Object.values(allEvents)) {
    for (const yearEvents of Object.values(category)) {
      const event = yearEvents.find((e) => e.slug === slug);
      if (event) return event;
    }
  }
  return null;
}

export default function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const event = findEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="font-sans flex-col flex w-screen relative scroll-smooth overflow-x-hidden">
      <Nav />
      <div className="relative bg-[url('/backgroundBlue.png')] bg-cover bg-center min-h-screen">
        <div className="pt-24 pb-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <a
            href="/events"
            className="inline-flex items-center gap-2 text-blue-950 hover:text-blue-800 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Events
          </a>

          {/* Event Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 shadow-lg">
            {/* Event Image */}
            <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Event Details */}
            <h1 className="text-4xl sm:text-5xl font-semibold text-blue-950 mb-6">
              {event.title}
            </h1>

            <p className="text-xl text-blue-900/80 mb-8 leading-relaxed">
              {event.description}
            </p>

            {/* Additional Event Information */}
            <div className="border-t border-blue-950/10 pt-8 mt-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-6">
                Event Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-950 mb-3">Date & Time</h3>
                  <p className="text-blue-900/70">
                    To be announced
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-950 mb-3">Location</h3>
                  <p className="text-blue-900/70">
                    To be announced
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-950 mb-3">Registration</h3>
                  <p className="text-blue-900/70">
                    Free admission - No registration required
                  </p>
                </div>
                
                <div className="bg-blue-50/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-950 mb-3">Contact</h3>
                  <p className="text-blue-900/70">
                    For more information, please contact us
                  </p>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="border-t border-blue-950/10 pt-8 mt-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                About This Event
              </h2>
              <p className="text-blue-900/70 leading-relaxed mb-4">
                This event is part of HAY Youth's ongoing commitment to serve and connect with our community. 
                Through events like these, we bring together talented young people and community members to 
                create meaningful experiences and lasting connections.
              </p>
              <p className="text-blue-900/70 leading-relaxed">
                Stay tuned for more details about this event. Follow us on social media or check back here 
                for updates on date, time, and registration information.
              </p>
            </div>

            {/* Call to Action */}
            <div className="border-t border-blue-950/10 pt-8 mt-8 text-center">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                Get Involved
              </h2>
              <p className="text-blue-900/70 mb-6">
                Interested in participating or volunteering at this event?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/volunteer"
                  className="inline-block bg-blue-950 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors"
                >
                  Volunteer with Us
                </a>
                <a
                  href="/#contact"
                  className="inline-block bg-white text-blue-950 border-2 border-blue-950 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
            </div>
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

