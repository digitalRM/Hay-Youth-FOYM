import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function ContactUs() {
  return (
    <div className="overflow-hidden bg-[url('/contact.png')] bg-white py-24 sm:py-32 backdrop-opacity-20 bg-cover bg-top -mt-12 sm:mt-0 border-b border-blue-950/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-16 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-blue-950">
                Contact Us
              </h2>
              <p className="mt-4 text-base/7 text-blue-950 text-balance">
                Get in touch with HAY Youth to learn more about our programs or
                get involved.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-4">
                <div className="rounded-2xl border border-blue-950/10 p-6">
                  <h3 className="text-base/7 font-semibold text-blue-950">
                    Information
                  </h3>
                  <dl className="mt-2 space-y-1 text-sm/6 text-blue-950">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          href="mailto:info@hayyouth.org"
                          className="font-semibold text-blue-500"
                        >
                          info@hayyouth.org
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <form
                action="#"
                method="POST"
                className="mx-auto mt-8 max-w-full px-0.5"
              >
                <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm/6 font-semibold text-blue-950"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-lg bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-blue-950/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm/6 font-semibold text-blue-950"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-lg bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-blue-950/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-semibold text-blue-950"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-lg bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-blue-950/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm/6 font-semibold text-blue-950"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full rounded-lg bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-blue-950/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <Button className="bg-blue-950 text-white rounded-lg w-full ">
                    Contact Us
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
