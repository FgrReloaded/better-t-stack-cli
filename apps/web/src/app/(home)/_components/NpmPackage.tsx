"use client";

const NpmPackage = () => {
	return (
		<div className="py-2 px-4 bg-black/60 rounded-md border border-blue-500/30 inline-flex items-center mb-4">
			<span className="text-gray-400 font-mono">$</span>
			<span className="text-gray-300 font-mono ml-2">npm i -g</span>
			<span className="text-blue-400 font-mono ml-2">
				create-better-t-stack
			</span>
		</div>
	);
};

export default NpmPackage;
