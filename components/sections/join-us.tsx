import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function JoinUs() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 bg-[url('/leftStackBlue.png')] backdrop-opacity-20 bg-cover bg-center -mt-12 sm:mt-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg mt-12">
              <h2 className="text-base/7 font-semibold text-blue-700">
                Volunteers Needed
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl">
                Our Mission
              </p>
              <p className="mt-6 text-lg/8 text-neutral-700">
              HAY Youth is  platform created, organized, and led by youth, designed to most effectively inspire their peers to use their talents and passion to serve the community. Here, young people form deep connections with the community, inspire one another, and grow together into better versions of themselves through contribution and creation. Every young person is seen as a valued designer and co-builder of the community.
              </p>
              <div className="mt-8">
                <Button className="bg-blue-950 text-white rounded-lg w-full sm:w-auto">
                  Register as a volunteer
                </Button>
              </div>
            </div>
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden sm:p-2  border border-white bg-white/30 backdrop-blur-md">
            <img
              src="/2025-Father-Day.jpg"
              alt="Join Us"
              className="object-cover h-full w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
