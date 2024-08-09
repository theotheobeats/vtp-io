import React from "react";

// Define an interface for the props
interface TagsProps {
	name: string;
}

// Use the interface in the component
const Tags: React.FC<TagsProps> = ({ name }) => {
	return (
		<div className="text-xs px-2 bg-secondary rounded-xl text-center flex items-center">
			{name}
		</div>
	);
};

export default Tags;
