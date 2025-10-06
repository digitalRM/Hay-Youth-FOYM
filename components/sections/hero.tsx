"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const sliderImages = ["/1.png", "/2.png", "/3.png"];

const navigation = [
  { name: "Home", href: "#" },
  { name: "Our Team", href: "#" },
  { name: "Events", href: "#" },
  { name: "Youth Volunteer", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-[1200px] h-full bg-[url('/backgroundGreen.png')] bg-cover bg-center">
      <header className="absolute max-w-6xl mx-auto inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/HayGreenLogo.png" className="h-6 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
            >
              <span className="sr-only">Open main menu</span>
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-neutral-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button variant="outline" className="rounded-full text-green-950">
              Donate to our cause
            </Button>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src="/HayGreenLogo.png" className="h-6 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-neutral-700"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-neutral-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-neutral-900 hover:bg-neutral-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Button
                    variant="outline"
                    className="rounded-full text-green-950 w-full"
                  >
                    Donate to our cause
                  </Button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate pt-6">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center -mt-10">
            <div className="relative rounded-full px-3 pr-0.5 py-1 text-sm/6 text-neutral-600 ring-1 ring-green-900/10 hover:ring-green-900/20">
              Sign up as a volunteer today.
              <a
                href="#"
                className="font-semibold text-green-800 rounded-full border p-1 px-3 ml-2"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Register now
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tighter text-green-950 sm:text-7xl">
              Empowering Youth. Building Tomorrow.
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-neutral-500 sm:text-xl/8">
              We encourage young people to better their communities by using
              their skills through youth-focused events, tutoring sessions, and
              challenges.
            </p>
            <div className="mt-10 flex items-center justify-center gap-3 flex-col sm:flex-row px-6 sm:px-0">
              <Button className="bg-green-950 text-white rounded-lg w-full sm:w-auto">
                Learn about our mission
              </Button>
              <Button
                className="border-green-950/15 text-green-950 rounded-lg w-full sm:w-auto"
                variant="outline"
              >
                Donate to our cause
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto z-90 md:px-6 lg:px-8 py-36 -mt-24 w-full relative overflow-hidden flex items-center justify-center">
          <div className="mx-auto w-full scale-175 flex justify-center items-center rounded-3xl z-[5] relative min-w-[500px] ">
            <Carousel
              opts={{ loop: true, align: "start" }}
              className="overflow-visible rounded-2xl w-full"
            >
              <CarouselContent className="overflow-visible" overflowVisible>
                {sliderImages.map((src, i) => (
                  <CarouselItem
                    key={i}
                    className="lg:basis-1/3 p-[4px] border-[0.75px] border-white ml-2 rounded-[15px] bg-white/30 backdrop-blur-md"
                  >
                    <div className="relative aspect-video w-full overflow-hidden border-[0.75px] border-white rounded-[11px] bg-white">
                      <Image
                        src={src}
                        alt={`Gallery image ${i + 1}`}
                        width={700}
                        height={700}
                        quality={25}
                        className="object-cover rounded-lg object-right-bottom transition-all duration-150"
                        priority={i === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
