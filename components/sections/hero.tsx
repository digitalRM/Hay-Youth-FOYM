"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Nav from "@/components/sections/nav";

const sliderImages = ["/1.png", "/2.png", "/3.png"];

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-blue-50 h-full bg-[url('/backgroundBlue.png')] bg-cover bg-center pb-4">
      <Nav />

      <div className="relative isolate pt-24">
        <div className="mx-auto max-w-6xl py-8 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl font-semibold tracking-tighter text-blue-950 sm:text-5xl mx-auto leading-tight px-4">
            Youth-Led Platform to Design, Inspire,<br />and Serve the Community
            </h1>
            <p className="mt-6 text-balance text-lg font-medium text-neutral-500 sm:text-xl/8 px-6 sm:px-0">
            Harmony in Action: Connected by Music, Led by Youth
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 flex-col sm:flex-row px-6 sm:px-0">
              <Button 
                className="bg-blue-950 text-white rounded-lg w-full sm:w-auto"
                onClick={() => {
                  const element = document.querySelector('[data-section="our-mission"]');
                  if (element) {
                    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                  }
                }}
              >
                Learn about our mission
              </Button>
              <Button
                className="border-blue-950/15 text-blue-950 rounded-lg w-full sm:w-auto"
                variant="outline"
              >
                Donate to our cause
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <a
                href="#"
                className="text-blue-950/70 hover:text-blue-950 transition-all p-2 rounded-full border border-blue-950/20 hover:border-blue-950/40"
              >
                <span className="sr-only">Facebook</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-950/70 hover:text-blue-950 transition-all p-2 rounded-full border border-blue-950/20 hover:border-blue-950/40"
              >
                <span className="sr-only">Instagram</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@HarmonyAssociationforYouth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-950/70 hover:text-blue-950 transition-all p-2 rounded-full border border-blue-950/20 hover:border-blue-950/40"
              >
                <span className="sr-only">YouTube</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-950/70 hover:text-blue-950 transition-all p-2 rounded-full border border-blue-950/20 hover:border-blue-950/40"
              >
                <span className="sr-only">WeChat</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2C4.802 2 1.645 4.834 1.645 8.326c0 1.827.877 3.416 2.243 4.46l-.561 1.692 1.963-.983c.697.385 1.467.639 2.288.754-.181-.642-.279-1.319-.279-2.019 0-3.493 3.156-6.326 7.045-6.326.37 0 .733.034 1.087.098C14.722 3.569 11.944 2 8.691 2zM17.309 7c-3.889 0-7.046 2.834-7.046 6.326 0 3.493 3.157 6.327 7.046 6.327 1.13 0 2.193-.267 3.134-.734l1.963.983-.561-1.693c1.366-1.043 2.243-2.632 2.243-4.46C24.088 9.834 20.932 7 17.309 7zm-3.14 3.333h.628v1.25h-1.256v.625h1.256v1.25h.628v-1.25h1.256v-.625H15.425v-1.25h-.628zm4.396 0h.628v1.25h-1.256v.625h1.256v1.25h.628v-1.25h1.256v-.625H19.821v-1.25h-.628z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto z-90 md:px-6 lg:px-8 py-24 -mt-12 w-full relative overflow-hidden flex items-center justify-center">
          <div className="mx-auto w-full scale-175 flex justify-center items-center rounded-3xl z-[5] relative min-w-[500px] ">
            {isLoaded && <Carousel
              opts={{
                loop: true,
                align: "start",
                dragFree: true,
                containScroll: false,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: false,
                  playOnInit: true,
                }),
              ]}
              className="overflow-visible rounded-2xl w-full"
            >
              <CarouselContent className="overflow-visible -ml-2" overflowVisible>
                {[...sliderImages, ...sliderImages, ...sliderImages].map((src, i) => (
                  <CarouselItem
                    key={i}
                    className="basis-1/3 pl-2 transition-transform duration-300 ease-in-out"
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-[11px] bg-white">
                      <Image
                        src={src}
                        alt={`Gallery image ${(i % sliderImages.length) + 1}`}
                        width={700}
                        height={700}
                        quality={100}
                        className="object-cover rounded-lg object-right-bottom"
                        priority={i === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>}
          </div>
        </div>
      </div>
    </div>
  );
}
