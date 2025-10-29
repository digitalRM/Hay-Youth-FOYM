"use client";

import { useState } from "react";
import Image from "next/image";

interface MemberCardProps {
  name: string;
  role: string;
  description?: string;
  imageSrc?: string;
}

export function MemberCard({ name, role, description, imageSrc }: MemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-white/20 hover:border-white/40 hover:bg-white/85"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={`${name}'s profile`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-4xl text-muted-foreground">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-blue-950">{name}</h3>
          <p className="text-neutral-500">{role}</p>
        </div>
      </div>

      {description && (
        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-900/95 to-blue-950/95 p-6 flex items-center justify-center rounded-2xl transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <p className="text-white text-center font-medium">{description}</p>
        </div>
      )}
    </div>
  );
}
