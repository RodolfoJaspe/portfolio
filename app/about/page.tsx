import { AnimatedImage } from "../components/animated-image";
import { Navigation } from "../components/nav";
export default function About() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 w-screen h-full">
        <Navigation />
        <AnimatedImage />
        <div className="flex flex-col items-center h-screen  mt-10 ">
            <h1 className="text-4xl font-bold animate-fade-in-delayed opacity-0 bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-transparent">About me</h1>
            <br/>
            <p className="text-lg opacity-0 animate-fade-in-delayed text-zinc-300">I'm a software developer with a passion for building stuff</p>
            <br/>
            <p className="text-lg animate-fade-in-delayed-extra opacity-0 text-zinc-300">but that's not even half of it</p>
        </div>
    </div>
  )
}
