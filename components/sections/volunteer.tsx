"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Sparkles, Award } from "lucide-react";

export default function Volunteer() {
  return (
    <div className="relative bg-[url('/backgroundBlue.png')] bg-cover bg-center min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl mb-4">
            Volunteer With HAY
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl">
            <div className="text-blue-900/80 leading-relaxed space-y-4 mb-8">
              <p>
                When you volunteer for the Harmony Association for Youth (HAY), you join an organization dedicated to caring for and supporting young people. Our comprehensive programs and opportunities empower youth to develop essential skills, discover their passions, and reach their full potential.
              </p>
              
              <p>
                At HAY, we deeply value our volunteers and treat everyone with the respect and appreciation they deserve. Our volunteers find fulfillment in their service because they have the opportunity to share their creativity, knowledge, and unique perspectives while making a tangible difference in the lives of young people in our community.
              </p>
              
              <p>
                If you would like to join us as a volunteer or need to request a certificate for your volunteer hours, please contact us at <a href="mailto:info@hayyouth.org" className="text-blue-950 font-medium hover:text-blue-700 transition-colors">info@hayyouth.org</a>.
              </p>
            </div>

            {/* Certification and Registration Buttons */}
            <div className="text-center pt-6 border-t border-blue-900/20">
              <p className="text-blue-900/80 mb-6 text-lg">
                Please fill out the appropriate form below:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="https://forms.gle/sSQHwvvbDnoHaTqs8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-950 rounded-xl hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Award className="size-5 mr-2" />
                  Volunteer Registration Form
                </Link>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfP6m_wQB9Q1Lj8_ijwf0AKe1wqcd8W8YyiaGlWb7kOuOfIbA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-950 rounded-xl hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Award className="size-5 mr-2" />
                  Volunteer Certification Form
                </Link>
              </div>
            </div>
          </div>
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

