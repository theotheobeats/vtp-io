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
import { ArrowUpRight, Github, GithubIcon } from "lucide-react";

interface ProjectCardProps {
	name: string;
	description: string;
	image: string;
	url: string;
	tags: string[];
	github: string;
}

const ProjectCard = ({
	name,
	description,
	image,
	url,
	tags,
	github,
}: ProjectCardProps) => {
	return (
		<>
			<Card className="w-[280px] h-[350px] hover:opacity-90 transition-all">
				<CardHeader className="space-y-4">
					<CardTitle>
						<div className="flex justify-between">
							<div>{name}</div>
							<div className="flex items-center">
								<div>
									<a href={url} target="_blank" className="hover:opacity-70">
										<ArrowUpRight size={20} />
									</a>
								</div>
								<div>
									<a href={github} target="_blank" className="hover:opacity-70">
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
		</>
	);
};

export default ProjectCard;
