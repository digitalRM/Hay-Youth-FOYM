import { Button } from "@/components/ui/button";
import { MicVocal, Spotlight, Theater } from "lucide-react";
import Image from "next/image";

export default function WhatWeOffer() {
  return (
    <div className="overflow-hidden bg-blue-50/30 py-12 sm:py-16 backdrop-opacity-20 bg-cover bg-center -mt-12 sm:mt-0 border-y border-blue-950/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base/7 font-semibold text-blue-600">
            What We Offer
          </p>
          <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl">
            Comprehensive Programs
          </h1>
          <div className="mt-10 grid grid-cols-1 gap-4 text-base/7 text-blue-950 lg:max-w-none lg:grid-cols-2">
            <div className="border border-blue-950/10 rounded-xl rounded-tl-[45px] p-5">
              <div className="flex items-center justify-center bg-blue-500/30 rounded-full p-2 size-14 mb-6">
                <Spotlight className="size-7 text-blue-950" />
              </div>
              <h2 className="text-xl/7 font-semibold tracking-tight text-blue-950">
                Youth Stage
              </h2>

              <p className="text-base/7 text-blue-950 mt-4">
                A dynamic platform where youth showcase their talents through
                performances, theatrical productions, and creative presentations
                that inspire and engage the community.
              </p>
            </div>
            <div className="border border-blue-950/10 rounded-xl p-5 rounded-tl-[45px]">
              <div className="flex items-center justify-center bg-blue-500/30 rounded-full p-2 size-14 mb-6">
                <MicVocal className="size-7 text-blue-950 -ml-0.5" />
              </div>
              <h2 className="text-xl/7 font-semibold tracking-tight text-blue-950">
                Public Lecture
              </h2>
              <p className="text-base/7 text-blue-950 mt-4">
                Educational and inspirational speaking events where youth and
                community leaders come together to share knowledge, experiences,
                and insights on important topics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
