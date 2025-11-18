import { Button } from "@/components/ui/button";
import { MicVocal, Spotlight, Theater } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="overflow-hidden bg-blue-50/50 py-24 backdrop-opacity-20 bg-cover  -mt-12 sm:mt-0 border-b border-blue-950/10">
      <div className="mx-auto max-w-7xl sm:bg-[url('/cta.png')] bg-[50%_25%] px-6 lg:px-8 py-24 border-y sm:border sm:rounded-xl p-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none text-center">
          <h1 className="mt-2 text-pretty text-3xl sm:text-4xl font-semibold tracking-tight text-blue-950">
            Ready to Make a Difference?
          </h1>
          <p className="mt-6 text-base/7 sm:text-lg/7 text-blue-950 max-w-[526px] mx-auto">
            Join us in empowering youth and building stronger communities. Every
            contribution matters.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-2 w-full sm:w-fit mx-auto">
            <Button
              variant="outline"
              className="rounded-xl text-blue-950 w-full sm:w-fit"
            >
              Volunteer with us
            </Button>
            <Button className="bg-blue-950 hover:bg-blue-950/90 text-white rounded-xl w-full sm:w-fit">
              Donate to our cause
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
