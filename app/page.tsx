"use client";

import Link from "next/link";
import Particles from "./components/particles";
const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "About me", href: "/about" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex justify-center items-center gap-2 sm:gap-8 flex-wrap sm:flex-nowrap">
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl xl:text-9xl whitespace-nowrap">
          Hi, I'm Rodolfo
        </h1>
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-md text-zinc-500 ">
          Full Stack Web Developer
        </h2>
      </div>
    </div>
  );
}
