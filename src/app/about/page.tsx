import ConnectButton from "@/components/ConnectButton";
import { GithubIcon, InstagramIcon, Linkedin, Mail } from "lucide-react";
import React from "react";

const page = () => {
	return (
		<div className="mx-auto mt-28 max-w-[36rem] px-8 sm:px-0 mb-20">
			<div className="flex-col">
				<div className="flex gap-16">
					<span className="text-slate-400 items-center w-[5rem]">About</span>
					<div className="flex-1">
						<p className="text-justify">
							My name is Valentinus Theo. I&apos;m a junior software engineer
							that born and based in Palembang, Indonesia. I&apos;ve been coding
							since I was in college but has lost interest for awhile and then
							back again focusing on coding early 2021. I specialize in
							full-stack web development using various programming languages and
							framework such as Javascript, Typescript, React, Next.js, Laravel
							and more.
						</p>
						<p className="text-justify mt-8">
							These days I mainly use full-stack Next.js for most portfolios I
							made and use serverless database BaaS such as Supabase or Neon,
							and getting my hands on ORMs like Prisma or Drizzle. But you know,
							learning is a constant variable in my dictionary. So I&apos;m
							willing to learn as many new things as possible for a lifetime.
						</p>
					</div>
				</div>
				<div className="flex gap-16 mt-16">
					<span className="text-slate-400 items-center w-[5rem]">Work</span>
					<div className="flex justify-between flex-1">
						<div>
							<p className="text-justify font-semibold">Fullstack Developer</p>
							<p className="text-xs">Smart Integrated System - Indonesia</p>
						</div>
						<div className="text-right">2023 - 2024</div>
					</div>
				</div>
				<div className="flex gap-16 mt-16">
					<span className="text-slate-400 items-center w-[5rem] flex-shrink-0">
						Connect
					</span>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
						<ConnectButton
							link="vtp@gmail.com"
							title="vtp@gmail.com"
							icon={<Mail size={14} />}
						/>
						<ConnectButton
							link="https://www.linkedin.com/in/valentinus-theo-prathama-a41287253/"
							title="Valentinus Theo"
							icon={<Linkedin size={14} />}
						/>
						<ConnectButton
							link="https://www.instagram.com/valentinustheo/"
							title="@valentinustheo"
							icon={<InstagramIcon size={14} />}
						/>
						<ConnectButton
							link="https://github.com/theotheobeats"
							title="theotheobeats"
							icon={<GithubIcon size={14} />}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
