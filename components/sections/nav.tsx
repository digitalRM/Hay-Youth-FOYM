"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Our Team", href: "/members" },
];

const youthConcertDropdown = [
  { name: "Lunar New Year Youth Concert", href: "/events#lunar-new-year" },
  { name: "Family Ties in Harmony", href: "/events#family-ties" },
  { name: "Youth Melody for Seniors", href: "/events#youth-melody" },
];

const otherNavigation = [
  { name: "Community Events", href: "/community-events" },
  { name: "Youth Volunteer", href: "/volunteer" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [youthConcertDropdownOpen, setYouthConcertDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-lg">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8 mx-auto max-w-7xl"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Hay Assocation for Youth</span>
            <img
              alt="Hay Assocation for Youth"
              src="/HayBlueLogo.png"
              className="w-auto h-8"
            />
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
        <div className="hidden lg:flex lg:gap-x-6 lg:items-center lg:ml-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-semibold text-neutral-900 hover:text-blue-950 transition-colors"
            >
              {item.name}
            </a>
          ))}
          
          {/* Youth Concert Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setYouthConcertDropdownOpen(true)}
            onMouseLeave={() => setYouthConcertDropdownOpen(false)}
          >
            <a
              href="/events"
              className="text-base font-semibold text-neutral-900 hover:text-blue-950 transition-colors flex items-center gap-1 py-2"
            >
              Youth Concert
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            
            {youthConcertDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-64 z-50">
                <div className="bg-white rounded-lg shadow-lg border border-neutral-200 py-2">
                  {youthConcertDropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-blue-50 hover:text-blue-950 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {otherNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-semibold text-neutral-900 hover:text-blue-950 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button className="rounded-full bg-blue-950 text-white text-base px-6 py-2">
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
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-md p-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Hay Assocation for Youth</span>
              <img
                alt="Hay Assocation for Youth"
                src="/HayBlueLogo.png"
                className="h-8 w-auto"
              />
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
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-neutral-900 hover:bg-neutral-50"
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Youth Concert Section in Mobile Menu */}
                <div className="-mx-3">
                  <a
                    href="/events#youth-concert"
                    className="block px-3 py-2 text-lg font-semibold text-neutral-900 hover:bg-neutral-50 rounded-lg"
                  >
                    Youth Concert
                  </a>
                  <div className="pl-6 space-y-2">
                    {youthConcertDropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                
                {otherNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-neutral-900 hover:bg-neutral-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Button
                  className="rounded-full bg-blue-950 text-white w-full text-base py-2"
                >
                  Donate to our cause
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
