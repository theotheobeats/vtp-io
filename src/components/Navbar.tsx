"use client";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { MenuIcon, Moon, MoonIcon, Sun } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
	const { setTheme } = useTheme();
	const { theme } = useTheme();
	useGSAP(() => {
		gsap.to("#nav", {
			opacity: 1,
			ease: "circ.in",
		});
	}, []);
	return (
		<>
			<div className="hidden sm:md:lg:block opacity-0" id="nav">
				{" "}
				<NavigationMenu className="flex items-center mx-auto py-2 max-w-[40rem] w-full">
					<NavigationMenuList className="flex items-center justify-between w-full outline-black mt-4 rounded-lg">
						<div className="flex items-center gap-36">
							<NavigationMenuItem>
								<Link href="/">
									<Image
										src={`/images/logo${theme === "dark" ? "-dark" : ""}.png`} // Conditional path based on theme
										width={65}
										height={65}
										alt="logo"
										className="dark:hidden" // Hide in dark mode
									/>
									<Image
										src="/images/logo-dark.png" // Dark mode image
										width={65}
										height={65}
										alt="logo"
										className="hidden dark:block" // Show in dark mode
									/>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link
									href="/"
									className="text-primary hover:text-secondary transition-all text-sm">
									Home
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link
									href="/about"
									className="text-primary hover:text-secondary transition-all text-sm">
									About
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="outline" size="icon">
											<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
											<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
											<span className="sr-only">Toggle theme</span>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem onClick={() => setTheme("light")}>
											Light
										</DropdownMenuItem>
										<DropdownMenuItem onClick={() => setTheme("dark")}>
											Dark
										</DropdownMenuItem>
										<DropdownMenuItem onClick={() => setTheme("system")}>
											System
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</NavigationMenuItem>
						</div>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<div className="sm:md:lg:hidden">
				<div className="flex justify-between px-4 pt-8 items-center">
					<Link href="/">
						<Image
							src={`/images/logo${theme === "dark" ? "-dark" : ""}.png`}
							width={65}
							height={65}
							alt="logo"
							className="dark:hidden"
						/>
						<Image
							src="/images/logo-dark.png"
							width={65}
							height={65}
							alt="logo"
							className="hidden dark:block"
						/>
					</Link>
					<div className="flex gap-4 items-center">
						<div>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline" size="icon">
										<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
										<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
										<span className="sr-only">Toggle theme</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem onClick={() => setTheme("light")}>
										Light
									</DropdownMenuItem>
									<DropdownMenuItem onClick={() => setTheme("dark")}>
										Dark
									</DropdownMenuItem>
									<DropdownMenuItem onClick={() => setTheme("system")}>
										System
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<div>
							<Popover>
								<PopoverTrigger>
									<MenuIcon className="text-slate-500 hover:text-black cursor-pointer" />
								</PopoverTrigger>
								<PopoverContent className="w-30 mr-4">
									<div className="flex-col text-center justify-between">
										<div className="mb-4">
											<Link
												href="/"
												className="hover:bg-slate-100 px-10 py-2 rounded-xl text-xs">
												Home
											</Link>
										</div>
										<div>
											<Link
												href="/about"
												className="hover:bg-slate-100 px-10 py-2 rounded-xl text-xs">
												About
											</Link>
										</div>
									</div>
								</PopoverContent>
							</Popover>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
