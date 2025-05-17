"use client";
import {
    motion,
    useMotionTemplate,
    useSpring
} from "framer-motion";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

interface CardProps extends PropsWithChildren {
	className?: string;
	featured?: boolean;
	isFirst?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", featured = false, isFirst = false }) => {
	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });
	const cardRef = useRef<HTMLDivElement>(null);
	const [isInMiddle, setIsInMiddle] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Check if the element is roughly in the middle of the viewport
						const rect = entry.boundingClientRect;
						const viewportHeight = window.innerHeight;
						const elementMiddle = rect.top + rect.height / 2;
						const viewportMiddle = viewportHeight / 2;
						const isMiddle = Math.abs(elementMiddle - viewportMiddle) < rect.height / 2;
						
						setIsInMiddle(isMiddle);
					} else {
						setIsInMiddle(false);
					}
				});
			},
			{
				threshold: [0, 0.25, 0.5, 0.75, 1],
				rootMargin: "-50% 0px -50% 0px"
			}
		);

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => {
			if (cardRef.current) {
				observer.unobserve(cardRef.current);
			}
		};
	}, []);

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
			className={`overflow-hidden relative duration-700 border-2 rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-red-950 border-zinc-500 ${className} ${
				isFirst ? "h-[300px] md:h-[440px] md:row-span-2" : "h-[150px] md:h-[200px]"
			} ${isInMiddle ? 'border-red-950' : ''}`}
		>
			<div className="pointer-events-none">
				<div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
				<div className={`absolute inset-0 z-10 bg-black/95 transition-opacity duration-500 ${isInMiddle ? 'opacity-60' : 'opacity-90'} md:opacity-90 md:group-hover:opacity-60`} />
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
