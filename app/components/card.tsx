"use client";
import {
    motion,
    useMotionTemplate,
    useSpring
} from "framer-motion";
import { PropsWithChildren, useRef } from "react";

interface CardProps extends PropsWithChildren {
	className?: string;
	featured?: boolean;
	isFirst?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", featured = false, isFirst = false }) => {
	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });
	const cardRef = useRef<HTMLDivElement>(null);

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}
	const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
	const style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<div
			ref={cardRef}
			onMouseMove={onMouseMove}
			className={`overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ${className} ${
				isFirst ? "h-[300px] md:h-auto md:row-span-2" : "h-[150px]"
			}`}
		>
			<div className="pointer-events-none">
				<div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
				<div className="absolute inset-0 z-10 bg-zinc-800/80 transition-opacity duration-500 group-hover:opacity-40" />
				<motion.div
					className="absolute inset-0 z-10 bg-gradient-to-br opacity-0 via-zinc-100/10 transition duration-1000 group-hover:opacity-100"
					style={style}
				/>
				<motion.div
					className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
					style={style}
				/>
			</div>

			{children}
		</div>
	);
};
