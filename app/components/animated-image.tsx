'use client';

export function AnimatedImage() {
  return (
    <>
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white animate-roll-in" style={{ opacity: 0 }}>
        <img
          src="/og.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <style jsx>{`
        @keyframes roll-in {
          0% {
            transform: translateX(-100vw) rotate(-360deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
        }
        .animate-roll-in {
          animation: roll-in 3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
} 