'use client';

import { useState } from 'react';

interface ProjectIframeProps {
  url: string;
}

export function ProjectIframe({ url }: ProjectIframeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!url) return null;

  return (
    <div className={`relative w-full transition-all duration-300 ease-in-out ${isLoaded ? 'h-[800px]' : 'h-[200px]'}`}>
      {!isLoaded ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setIsLoaded(true)}
            className="px-4 py-2 text-lg font-medium text-white border border-white rounded-md hover:bg-white hover:text-black transition-colors"
          >
            Load Project
          </button>
        </div>
      ) : (
        <iframe
          src={url}
          className="w-full h-full"
          title="Project Preview"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      )}
    </div>
  );
} 