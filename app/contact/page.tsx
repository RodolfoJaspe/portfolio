"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://x.com/jaspe_rodolfo",
		label: "Twitter",
		handle: "@jaspe_rodolfo",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:rodolfojaspe21@gmail.com",
		label: "Email",
		handle: "rodolfojaspe21\n@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/RodolfoJaspe",
		label: "Github",
		handle: "RodolfoJaspe",
	},
];

export default function Contact() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 h-full">
			<Navigation />
            <div className="px-6 pt-20 mx-auto mb-0 max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
                <div className="mx-auto lg:mx-0 md:space-y-4 border-b border-zinc-800 pb-16 mb-16">
                    <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-zinc-100 to-zinc-900 bg-clip-text text-transparent sm:text-4xl">
                        Contact
                    </h2>
                    <p className="text-zinc-300 mt-4">
                        👋 Say hello, hola, ciao, hallo, or whatever you want.
                    </p>
                    
                </div>
                <div className="container flex items-center justify-center px-4 mx-auto mt-20 border-b border-zinc-800 pb-16">
                    <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-16">
                        {socials.map((s) => (
                            <Card isContact>
                                <Link
                                    href={s.href}
                                    target="_blank"
                                    className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                                >
                                    <span
                                        className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                        aria-hidden="true"
                                    />
                                    <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                        {s.icon}
                                    </span>{" "}
                                    <div className="z-10 flex flex-col items-center">
                                        <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                                            {s.handle}
                                        </span>
                                        <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                            {s.label}
                                        </span>
                                    </div>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            
		</div>
	);
}
