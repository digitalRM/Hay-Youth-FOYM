"use client";

import { Linkedin, Twitter, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const leadershipTeam = [
  {
    name: "Felix Wu",
    role: "Web Team Leader",
    description: "", // To be provided later
    funFact: "Passionate about technology and community impact",
    linkedin: "", // To be provided later
    twitter: "", // To be provided later
    imageSrc: undefined,
  },
  {
    name: "Hellen",
    role: "Leadership Team",
    description: "", // To be provided later
    funFact: "Dedicated to empowering youth voices",
    linkedin: "", // To be provided later
    twitter: "", // To be provided later
    imageSrc: undefined,
  },
  {
    name: "Carolyn Xu",
    role: "Leadership Team",
    description: "Carolyn Xu has been an active member of HAY since its inception, contributing significantly to the organization's development and growth. She is passionate about music and enjoys playing both the piano and violin, as well as exploring photography and creating vibrant handmade crafts. Carolyn helps organize youth music events that give back to the community and foster meaningful connections through music. She also manages and updates HAY's YouTube channel, using her creativity to produce and edit videos that capture and preserve special moments. Proud to be part of HAY's journey, Carolyn remains dedicated to helping the organization grow and strengthen the community through creativity and collaboration.",
    funFact: "Loves music, photography, and creating handmade crafts",
    linkedin: "", // To be provided later
    twitter: "", // To be provided later
    imageSrc: undefined,
  },
];

const webTeam = [
  {
    name: "Jeffery",
    role: "Web Team Manager",
    description: "", // To be provided later
    funFact: "Tech enthusiast and problem solver",
    linkedin: "", // To be provided later
    twitter: "", // To be provided later
    imageSrc: undefined,
  },
  {
    name: "Tristan",
    role: "Web Team Manager",
    description: "", // To be provided later
    funFact: "Committed to building innovative solutions",
    linkedin: "", // To be provided later
    twitter: "", // To be provided later
    imageSrc: undefined,
  },
];

const values = [
  {
    title: "Youth Empowerment",
    description:
      "We believe every young person is a valued designer and co-builder of the community. We provide platforms and opportunities that enable youth to lead, create, and make meaningful contributions.",
  },
  {
    title: "Community Connection",
    description:
      "Building deep, meaningful connections between young people and their communities is at the heart of what we do. We foster relationships that inspire growth and mutual support.",
  },
  {
    title: "Creativity & Innovation",
    description:
      "We encourage creative expression and innovative thinking in all our programs. From performance arts to technology, we celebrate diverse talents and passions.",
  },
  {
    title: "Service & Impact",
    description:
      "Service to the community drives everything we do. We inspire youth to use their talents and passions to create positive change and lasting impact.",
  },
];

export default function Members() {
  return (
    <div className="relative bg-[url('/backgroundBlue.png')] bg-cover bg-center min-h-screen">
      {/* Team Section */}
      <section className="mx-auto max-w-7xl pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl mb-4">
            The HAY Team
          </h2>
          <p className="text-lg text-blue-900/70 max-w-2xl mx-auto">
            Meet the dedicated individuals who make our mission possible. Our team is made up of passionate youth leaders committed to building a stronger community.
          </p>
        </div>

        {/* Leadership Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-blue-950 text-center mb-4">
            Leadership Team
          </h3>
          <p className="text-center text-blue-900/70 mb-8 max-w-2xl mx-auto">
            Our leadership team guides the organization's vision and ensures we stay true to our mission of youth empowerment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadershipTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-xl hover:border-white/40 transition-all text-center"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  {member.imageSrc ? (
                    <Image
                      src={member.imageSrc}
                      alt={`${member.name}'s profile`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-4xl font-semibold text-blue-950">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-blue-950 mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-900/70 mb-3">{member.role}</p>
                {member.funFact && (
                  <p className="text-sm text-blue-900/60 mb-4">
                    {member.funFact}
                  </p>
                )}
                <div className="flex justify-center gap-3">
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn profile`}
                      className="text-blue-900/70 hover:text-blue-950 transition-colors"
                    >
                      <Linkedin className="size-5" />
                    </Link>
                  )}
                  {member.twitter && (
                    <Link
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s Twitter profile`}
                      className="text-blue-900/70 hover:text-blue-950 transition-colors"
                    >
                      <Twitter className="size-5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech/Web Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-blue-950 text-center mb-4">
            Tech Team
          </h3>
          <p className="text-center text-blue-900/70 mb-8 max-w-2xl mx-auto">
            Our technical team builds and maintains the digital infrastructure that enables HAY to reach and serve our community effectively.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {webTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-xl hover:border-white/40 transition-all text-center"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  {member.imageSrc ? (
                    <Image
                      src={member.imageSrc}
                      alt={`${member.name}'s profile`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-4xl font-semibold text-blue-950">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-blue-950 mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-900/70 mb-3">{member.role}</p>
                {member.funFact && (
                  <p className="text-sm text-blue-900/60 mb-4">
                    {member.funFact}
                  </p>
                )}
                <div className="flex justify-center gap-3">
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn profile`}
                      className="text-blue-900/70 hover:text-blue-950 transition-colors"
                    >
                      <Linkedin className="size-5" />
                    </Link>
                  )}
                  {member.twitter && (
                    <Link
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s Twitter profile`}
                      className="text-blue-900/70 hover:text-blue-950 transition-colors"
                    >
                      <Twitter className="size-5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-500/20 rounded-full p-3">
              <Sparkles className="size-8 text-blue-950" />
            </div>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl mb-4">
            Our Values
          </h2>
          <p className="text-lg text-blue-900/70 max-w-2xl mx-auto">
            The principles that guide everything we do at HAY Youth
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-950 mb-3">
                {value.title}
              </h3>
              <p className="text-blue-900/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Subtle decorative elements */}
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
  );
}
