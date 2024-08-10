
import { ArrowUpRight, GithubIcon, Instagram, LinkedinIcon } from "lucide-react";
import React from "react";
const Hero = () => {
	return (
		<div className="mx-auto mt-20 max-w-[36rem] px-8 sm:md:lg:px-0 opacity-1">
			<h1 className="text-4xl">
				halo! <span className="font-semibold">Theo</span> here.
			</h1>
			<p className="text-slate-400 mt-2">
				I&apos;m a software engineer who loves to build cool-things on the web.
				On the other side, i make electronic music for fun or by client
				commission.
			</p>
			<div className="flex items-center mt-10 gap-4">
				<a
					href="https://github.com/theotheobeats"
					className="flex-shrink-0"
					target="_blank">
					<GithubIcon className="w-5 h-5 text-slate-500 hover:text-black transition-all" />
				</a>
				<a
					href="https://www.linkedin.com/in/valentinus-theo-prathama-a41287253/"
					className="flex-shrink-0"
					target="_blank">
					<LinkedinIcon className="w-5 h-5 text-slate-500 hover:text-black transition-all" />
				</a>
				<a
					href="https://www.instagram.com/valentinustheo/"
					className="flex-shrink-0"
					target="_blank">
					<Instagram className="w-5 h-5 text-slate-500 hover:text-black transition-all" />
				</a>
				<a
					href="/resume"
					className="flex bg-secondary rounded-lg px-2 hover:opacity-70 transition-all"
					target="_blank">
					<ArrowUpRight className="w-4 h-6 mr-[2px]" />{" "}
					<span className="text-xs pt-[4px]">full resume</span>
				</a>
			</div>
		</div>
	);
};

export default Hero;
