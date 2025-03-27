import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import Image from "next/image";
import Tags from "./Tags";
import { ArrowUpRight, Github } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

interface ProjectCardProps {
	name: string;
	description: string;
	image: string;
	url: string;
	tags: string[];
	github: string;
	gallery: string[];
}

const ProjectCard = ({
	name,
	description,
	image,
	url,
	tags,
	github,
	gallery,
}: ProjectCardProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Card 
				className="w-[280px] h-[350px] hover:opacity-90 transition-all cursor-pointer"
				onClick={() => setIsOpen(true)}
			>
				<CardHeader className="space-y-4">
					<CardTitle>
						<div className="flex justify-between">
							<div>{name}</div>
							<div className="flex items-center">
								<div>
									<a href={url} target="_blank" className="hover:opacity-70" onClick={(e) => e.stopPropagation()}>
										<ArrowUpRight size={20} />
									</a>
								</div>
								<div>
									<a href={github} target="_blank" className="hover:opacity-70" onClick={(e) => e.stopPropagation()}>
										<Github size={20} />
									</a>
								</div>
							</div>
						</div>
					</CardTitle>
					<CardDescription className="mx-auto">
						<Image
							src={image}
							width={400}
							height={400}
							alt="project-image"
							className="object-cover w-[200px]"
						/>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-xs">{description}</p>
					<div className="mt-4 flex flex-wrap gap-2">
						{tags.map((tag, index) => (
							<Tags key={index} name={tag} />
						))}
					</div>
				</CardContent>
			</Card>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className="max-w-4xl">
					<DialogHeader>
						<DialogTitle className="text-2xl">{name}</DialogTitle>
						<DialogDescription>
							<div className="mt-4">
								<div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto">
									{gallery.map((img, index) => (
										<div key={index} className="relative aspect-video">
											<Image
												src={img}
												fill
												alt={`project-image-${index + 1}`}
												className="object-contain rounded-lg"
											/>
										</div>
									))}
								</div>
							</div>
							<p className="mt-4 text-base">{description}</p>
							<div className="mt-4 flex flex-wrap gap-2">
								{tags.map((tag, index) => (
									<Tags key={index} name={tag} />
								))}
							</div>
							<div className="mt-6 flex gap-4">
								<a
									href={url}
									target="_blank"
									className="flex items-center gap-2 text-sm hover:underline"
								>
									<ArrowUpRight size={16} />
									View Project
								</a>
								<a
									href={github}
									target="_blank"
									className="flex items-center gap-2 text-sm hover:underline"
								>
									<Github size={16} />
									View Code
								</a>
							</div>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ProjectCard;
