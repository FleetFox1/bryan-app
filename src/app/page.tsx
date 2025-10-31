"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen">
      {/* Profile Photo */}
      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#d4af37] shadow-lg mb-6">
        <Image
          src="/profile.jpg"
          alt="Bryan Blankenburg"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Intro Text */}
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f0c44d] via-[#d4af37] to-[#7f3cff] bg-clip-text text-transparent leading-tight pb-1">
        Hi, I’m Bryan Blankenburg
      </h1>

      <p className="text-gray-400 text-lg mt-4">
        Builder • Developer • Founder
      </p>

      <p className="text-gray-500 mt-2 max-w-xl">
        Exploring ideas between technology, story, and trust. This is my personal space to experiment, learn, and build.
      </p>

      {/* Button */}
      <div className="mt-8">
        <a
          href="/manifest"
          className="px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#7f3cff] rounded-md text-[#0f0d15] font-semibold hover:opacity-90 transition"
        >
          Read the Manifest
        </a>
      </div>
    </main>
  );
}
