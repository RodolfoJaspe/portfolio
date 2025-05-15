'use client';

import Image from 'next/image';

export function AnimatedImage() {
  return (
    <div className="w-full flex justify-center pt-20">
      <div className="animate-roll-in-delayed opacity-0">
        <Image
          src="/og.png"
          alt="Profile"
          width={160}
          height={160}
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 object-cover overflow-hidden border-4 border-white rounded-full"
          priority
        />
      </div>
    </div>
  );
} 