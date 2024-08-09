import React from "react";

interface ConnectButtonProps {
	link: string;
	title: string;
	icon: React.ReactNode;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ link, title, icon }) => {
	const isEmail = link.includes("@");

	return (
		<a
			href={isEmail ? `mailto:${link}` : link}
			target="_blank"
			rel="noopener noreferrer"
			className="w-full flex gap-2 bg-secondary px-2 rounded-lg text-xs items-center sm:md:lg:w-52 text-center pl-4 py-2 hover:opacity-70 transition-all">
			{icon}
			<span>{title}</span>
		</a>
	);
};

export default ConnectButton;
