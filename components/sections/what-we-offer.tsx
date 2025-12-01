import { Button } from "@/components/ui/button";
import { MicVocal, Spotlight, Theater } from "lucide-react";
import Image from "next/image";

export default function WhatWeOffer() {
  return (
    <div className="overflow-hidden bg-blue-50/30 py-12 sm:py-16 backdrop-opacity-20 bg-cover bg-center -mt-12 sm:mt-0 border-y border-blue-950/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
            <p className="text-xl sm:text-2xl font-semibold text-blue-950">
              <span className="text-3xl sm:text-4xl font-bold">4+</span> community Youth concerts, with different theme of culture topics
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-blue-950">
              <span className="text-3xl sm:text-4xl font-bold">2+</span> concerts at senior centers, sharing music with seniors
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-blue-950">
              <span className="text-3xl sm:text-4xl font-bold">6+</span> public lecture supporting youth and improving youth communication
            </p>
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
