'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
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
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const handleImageClick = (index: number) => {
    if (selectedImage === index) {
      setSelectedImage(null);
    } else {
      setSelectedImage(index);
    }
  };

  const renderImages = () => {
    if (isTechSection) {
      return (
        <div className="grid grid-cols-5 xs:grid-cols-7 gap-2 flex-[0.4]">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square max-w-[100px] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(index)}
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
      );
    }

    return (
      <div className="flex flex-col gap-4 items-center">
        {selectedImage !== null ? (
          <>
            <div 
              className="relative aspect-square w-full h-[200px] xs:h-[300px] sm:h-[40vw] max-w-[400px] max-h-[400px] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(selectedImage)}
            >
              <Image
                src={`/images/${images[selectedImage]}.webp`}
                alt={`${title} experience ${selectedImage + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-between w-full max-w-[400px]">
              {images.map((image, index) => (
                index !== selectedImage && (
                  <div
                    key={index}
                    className="relative aspect-square h-[100px] max-h-[20vw] rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => handleImageClick(index)}
                  >
                    <Image
                      src={`/images/${image}.webp`}
                      alt={`${title} experience ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square h-[35vw] max-h-[200px] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(index)}
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
        )}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="w-full mb-16"
    >
      <Card className="p-4 xs:p-6 md:p-8" isAbout>
        <div className={`flex flex-col ${!isTechSection && 'lg:flex-row'} gap-8`}>
          <div className={`${isTechSection ? 'w-full' : 'flex-[0.5]'}`}>
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
          <div className={`${isTechSection ? 'w-full' : 'flex-[0.5]'}`}>
            {renderImages()}
          </div>
        </div>
      </Card>
    </motion.div>
  );
} 