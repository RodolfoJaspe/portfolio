'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from './card';

interface ExperienceSectionProps {
  title: string;
  description: string;
  images: string[];
  skills: string[];
  delay?: number;
}

export function ExperienceSection({ title, description, images, skills, delay = 0 }: ExperienceSectionProps) {
  const isTechSection = images[0]?.startsWith('tech');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="w-full max-w-4xl mx-auto mb-16"
    >
      <Card className="p-6 md:p-8" isAbout>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-[0.6]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-zinc-300 mb-6">{description}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-zinc-800/50 rounded-full text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className={`flex-[0.4] grid ${isTechSection ? 'grid-cols-3 sm:grid-cols-5 gap-2' : 'grid-cols-2 gap-4'}`}>
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={`/images/${image}.webp`}
                  alt={`${title} experience ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
} 