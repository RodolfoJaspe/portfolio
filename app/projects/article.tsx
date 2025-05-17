import type { Project } from "@/.contentlayer/generated";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
	project: Project;
	views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
	return (
		<Link href={`/projects/${project.slug}`}>
			<article className="relative p-4 md:p-8 group h-full">
				{project.image && (
					<div className="absolute inset-0 opacity-100 transition-opacity overflow-hidden">
						<Image
							src={project.image}
							alt={project.title}
							fill
							className="object-cover w-full h-full"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							priority
						/>
					</div>
				)}
				<div className="relative z-10 h-full">
					<div className="flex justify-end gap-2 items-center">
						<span className="text-zinc-500 text-xs flex items-center gap-1">
							<Eye className="w-4 h-4" />{" "}
							{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
						</span>
					</div>
					<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
						{project.title}
					</h2>
					<p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
						{project.description}
					</p>
				</div>
			</article>
		</Link>
	);
};
