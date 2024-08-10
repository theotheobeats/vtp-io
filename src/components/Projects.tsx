"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Projects = () => {
	useGSAP(() => {
		gsap.to("#project", {
			opacity: 1,
			ease: "circ.in",
			delay: 0.5,
		});
	}, []);
	return (
		<div
			className="max-w-[36rem] mx-auto mt-20 items-center sm:md:lg:px-0 sm:md:lg:text-left text-center pb-20 opacity-0"
			id="project">
			<p className="text-center">
				Notable <span className="underline">Projects</span>
			</p>
			<div className="p-4 flex items-center justify-center">
				<Carousel
					opts={{
						align: "start",
					}}
					className="max-w-[36rem] hidden md:lg:block">
					<CarouselContent>
						{projects.map((project, index) => (
							<CarouselItem key={index} className="basis-0  sm:md:lg:basis-1/2">
								<ProjectCard
									name={project.name}
									description={project.description}
									image={project.image}
									url={project.url}
									tags={project.tags}
									github={project.github}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
				<Carousel
					opts={{
						align: "start",
					}}
					className="max-w-[18rem] md:lg:hidden">
					<CarouselContent>
						{projects.map((project, index) => (
							<CarouselItem key={index}>
								<ProjectCard
									name={project.name}
									description={project.description}
									image={project.image}
									url={project.url}
									tags={project.tags}
									github={project.github}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>

			<span className="flex text-xs items-center justify-center">
				<ArrowLeft size={15} className="mr-2" />
				<span className="bold italic mr-[4px]">swipe</span>to see more projects.
				<ArrowRight size={15} className="ml-2" />
			</span>
		</div>
	);
};

export default Projects;
