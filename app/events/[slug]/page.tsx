"use client";

import { use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Nav from "@/components/sections/nav";
import Footer from "@/components/sections/footer";

// Import all event data - this should match the data from the main events page
const allEvents = [
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

// Helper function to find an event by slug
function findEventBySlug(slug: string) {
  return allEvents.find((e) => e.slug === slug) || null;
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

