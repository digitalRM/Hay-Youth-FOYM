"use client";

import { Linkedin, Twitter, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const hayTeam = [
  {
    name: "Carolyn Xu",
    role: "Youth Leader",
    description: "Carolyn Xu has been an active member of HAY since its inception, contributing significantly to the organization's development and growth. She is passionate about music and enjoys playing both the piano and violin, as well as exploring photography and creating vibrant handmade crafts.\n\nCarolyn helps organize youth music events that give back to the community and foster meaningful connections through music. She also manages and updates HAY's YouTube channel, using her creativity to produce and edit videos that capture and preserve special moments.\n\nProud to be part of HAY's journey, Carolyn remains dedicated to helping the organization grow and strengthen the community through creativity and collaboration.",
    funFact: "Loves music, photography, and creating handmade crafts",
    linkedin: "", // To be provided later
    twitter: "", // To be provided later
    imageSrc: "/Carolyn.png",
  },
  {
    name: "Felix Wu",
    role: "Youth Leader",
    description: "Felix plays an active role in designing and maintaining HAY's website. While gaming is one of his favorite hobbies, his deeper passion lies in empowering and supporting young people in achieving their dreams through HAY.\n\nHe joined HAY because he truly believes in its mission. As a young person himself, Felix understands the importance of having guidance, support, and access to the right resources when pursuing one's goals. HAY's dedication to helping youth reach their full potential deeply resonated with him and inspired his involvement.\n\nThrough his work on the website, Felix aims to strengthen HAY's digital presence and expand its reach. His contributions have already helped the organization connect with a broader audience, and he looks forward to continuing to improve and grow HAY's online platform to make an even greater impact.",
    funFact: "Passionate about technology and community impact",
    linkedin: "", // To be provided later
    twitter: "", // To be provided later
    imageSrc: undefined,
  },
  {
    name: "Helen Zhang",
    role: "Youth Leader",
    description: "Helen Zhang is a student at Inglemoor High School who joined HAY out of a passion for making a positive impact in the community and connecting with new people. Outside of her academic and volunteer commitments, she enjoys dancing, spending time with friends, reading, and practicing gymnastics.",
    funFact: "Dedicated to empowering youth voices",
    linkedin: "", // To be provided later
    twitter: "", // To be provided later
    imageSrc: "/Helen.png",
  },
  {
    name: "Tristan Ye",
    role: "Youth Leader",
    description: "Tristan Ye is a student at Inglemoor High School in Kenmore, Washington. Outside the classroom, he can often be found on the soccer field, immersed in a game of chess, strumming his guitar, coding, or exploring new video games.\n\nA dedicated volunteer at HAY, Tristan contributes to building and maintaining the organization's website. His experiences on the soccer field have taught him teamwork, dedication, and resilience—qualities that translate directly into his collaborative work at HAY.\n\nTristan's passion for chess sharpens his strategic thinking and composure under pressure, while his love for music allows him to connect with others through creativity and expression. His interests in coding and gaming further fuel his problem-solving skills and curiosity about the digital world.\n\nThrough his volunteer work with HAY, Tristan has been able to combine his diverse skills and passions to support the organization's digital presence and strengthen its community outreach efforts.",
    funFact: "Committed to building innovative solutions",
    linkedin: "", // To be provided later
    twitter: "", // To be provided later
    imageSrc: "/tristan.png",
  },
  {
    name: "Jeffrey Jiang",
    role: "Youth Leader",
    description: "Jeffrey Jiang is a junior at North Creek High School who enjoys spending his time playing video games with friends and working out. He joined HAY because he believes in its mission to create opportunities for youth to serve and connect with the community.\n\nAs a volunteer, Jeffrey hopes to help more people feel a stronger sense of belonging within the community. He is dedicated to improving HAY's website to make it more user-friendly and inclusive for everyone.",
    funFact: "Tech enthusiast and problem solver",
    linkedin: "", // To be provided later
    twitter: "", // To be provided later
    imageSrc: "/Jeffrey.png",
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
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl mb-3">
            The HAY Team
          </h2>
          <p className="text-lg text-blue-900/70 max-w-2xl mx-auto leading-relaxed">
            Meet our passionate youth leaders building a stronger community through creativity, innovation, and service.
          </p>
        </div>

        {/* HAY Team Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {hayTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-xl hover:border-white/40 transition-all duration-700 ease-in-out text-center group overflow-hidden"
              >
                {/* Default View */}
                <div className="group-hover:opacity-0 group-hover:max-h-0 transition-all duration-700 ease-in-out overflow-hidden max-h-[500px] opacity-100">
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
                
                {/* Expanded View on Hover */}
                <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[2000px] transition-all duration-700 ease-in-out overflow-hidden">
                  <h4 className="text-xl font-semibold text-blue-950 mb-3">
                    {member.name}
                  </h4>
                  <p className="text-blue-900/80 mb-3 font-medium">{member.role}</p>
                  {member.description && (
                    <div className="text-sm text-blue-900/70 text-left leading-relaxed space-y-3">
                      {member.description.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mx-auto max-w-7xl pt-0 pb-16 px-4 sm:px-6 lg:px-8">
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
