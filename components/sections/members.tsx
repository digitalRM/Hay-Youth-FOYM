"use client";

import { MemberCard } from "../ui/member-card";
import Image from "next/image";

const leadershipTeam = [
  {
    name: "Felix Wu",
    role: "Web Team Leader",
    description: "", // To be provided later
  },
  {
    name: "Hellen",
    role: "Leadership Team",
    description: "", // To be provided later
  },
  {
    name: "Carolyn Xu",
    role: "Leadership Team",
    description: "Carolyn Xu has been an active member of HAY since its inception, contributing significantly to the organization’s development and growth. She is passionate about music and enjoys playing both the piano and violin, as well as exploring photography and creating vibrant handmade crafts. Carolyn helps organize youth music events that give back to the community and foster meaningful connections through music. She also manages and updates HAY’s YouTube channel, using her creativity to produce and edit videos that capture and preserve special moments. Proud to be part of HAY’s journey, Carolyn remains dedicated to helping the organization grow and strengthen the community through creativity and collaboration.", // To be provided later
  },
];

const webTeam = [
  {
    name: "Jeffery",
    role: "Web Team Manager",
    description: "", // To be provided later
  },
  {
    name: "Tristan",
    role: "Web Team Manager",
    description: "", // To be provided later
  },
];

export default function Members() {
  return (
    <div className="relative bg-[url('/backgroundBlue.png')] bg-cover bg-center min-h-screen">
      <div className="mx-auto max-w-5xl py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold tracking-tight text-blue-950 sm:text-6xl">
            Our Team
          </h1>
          <p className="mt-6 text-lg font-medium text-blue-900/70 sm:text-xl">
            Meet the dedicated individuals who make our mission possible
          </p>
        </div>

        {/* Leadership Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-blue-950 text-center mb-8">
            Leadership Team
          </h2>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {leadershipTeam.map((member) => (
              <MemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>
        </div>

        {/* Web Team Section */}
        <div>
          <h2 className="text-3xl font-semibold text-blue-950 text-center mb-8">
            Web Team
          </h2>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {webTeam.map((member) => (
              <MemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute left-0 top-0 -z-10 opacity-20">
          <Image
            src="/leftStackBlue.png"
            alt="Decorative left stack"
            width={150}
            height={300}
            className="opacity-30"
          />
        </div>
        <div className="absolute right-0 bottom-0 -z-10 opacity-20">
          <Image
            src="/leftStack.png"
            alt="Decorative right stack"
            width={150}
            height={300}
            className="opacity-30 transform scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
}
