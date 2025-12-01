import { Button } from "@/components/ui/button";
import { MicVocal, Spotlight, Theater } from "lucide-react";
import Image from "next/image";

export default function WhatWeOffer() {
  return (
    <div className="overflow-hidden bg-blue-50/30 pt-20 pb-12 sm:pt-24 sm:pb-16 backdrop-opacity-20 bg-cover bg-center border-y border-blue-950/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-full">
          <h2 className="text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl text-left mb-12">
            How We Serve Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
            <div>
              <p className="text-5xl sm:text-6xl font-bold text-blue-950 mb-4">6+</p>
              <p className="text-xl sm:text-2xl font-semibold text-blue-950">
                Community Youth Concerts with different theme of culture topics
              </p>
            </div>
            <div>
              <p className="text-5xl sm:text-6xl font-bold text-blue-950 mb-4">2+</p>
              <p className="text-xl sm:text-2xl font-semibold text-blue-950">
                Concerts at Senior Centers sharing music with seniors
              </p>
            </div>
            <div>
              <p className="text-5xl sm:text-6xl font-bold text-blue-950 mb-4">6+</p>
              <p className="text-xl sm:text-2xl font-semibold text-blue-950">
                Public Lectures Supporting Youth and improving youth communication
              </p>
            </div>
          </div>
          <div className="mt-8 w-full max-w-5xl mx-auto">
            <Image
              src="/save.png"
              alt="HAY Programs"
              width={1920}
              height={600}
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
