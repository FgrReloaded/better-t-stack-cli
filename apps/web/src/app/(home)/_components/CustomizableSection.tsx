const CustomizableSection = () => {
	return (
		<section className="w-full max-w-6xl mx-auto py-16 px-4 relative z-10">
			<div className="border border-blue-500/30 rounded-md p-8 bg-black/50">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
						<span className="text-blue-500">$</span> create-better-t-stack
						--customize
					</h2>
					<p className="text-gray-300 mt-4 text-lg font-mono">
						Tailor your stack with powerful configuration options
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					<div className="space-y-4">
						<div className="flex items-center">
							<span className="text-blue-400 mr-2">$</span>
							<h3 className="text-xl font-bold text-blue-300">
								Database Options
							</h3>
						</div>
						<div className="font-mono space-y-2 border border-blue-900/50 p-4 rounded-md bg-black">
							<p className="text-gray-400">
								$ create-better-t-stack{" "}
								<span className="text-yellow-400">--postgres</span>
							</p>
							<p className="text-gray-400">
								$ create-better-t-stack{" "}
								<span className="text-yellow-400">--sqlite</span>
							</p>
							<p className="text-gray-400">
								$ create-better-t-stack{" "}
								<span className="text-yellow-400">--no-database</span>
							</p>
						</div>
					</div>

					<div className="space-y-4">
						<div className="flex items-center">
							<span className="text-blue-400 mr-2">$</span>
							<h3 className="text-xl font-bold text-blue-300">ORM Selection</h3>
						</div>
						<div className="font-mono space-y-2 border border-blue-900/50 p-4 rounded-md bg-black">
							<p className="text-gray-400">
								$ create-better-t-stack{" "}
								<span className="text-yellow-400">--drizzle</span>
							</p>
							<p className="text-gray-400">
								$ create-better-t-stack{" "}
								<span className="text-yellow-400">--prisma</span>
							</p>
						</div>
					</div>
				</div>

				<div className="grid md:grid-cols-2 gap-8 mt-8">
					<div className="space-y-4">
						<div className="flex items-center">
							<span className="text-blue-400 mr-2">$</span>
							<h3 className="text-xl font-bold text-blue-300">
								Package Managers
							</h3>
						</div>
						<div className="font-mono space-y-2 border border-blue-900/50 p-4 rounded-md bg-black">
							<p className="text-gray-400">
								$ create-better-t-stack{" "}
								<span className="text-yellow-400">--npm</span>
							</p>
							<p className="text-gray-400">
								$ create-better-t-stack{" "}
								<span className="text-yellow-400">--pnpm</span>
							</p>
							<p className="text-gray-400">
								$ create-better-t-stack{" "}
								<span className="text-yellow-400">--yarn</span>
							</p>
							<p className="text-gray-400">
								$ create-better-t-stack{" "}
								<span className="text-yellow-400">--bun</span>
							</p>
						</div>
					</div>

					<div className="space-y-4">
						<div className="flex items-center">
							<span className="text-blue-400 mr-2">$</span>
							<h3 className="text-xl font-bold text-blue-300">
								Additional Features
							</h3>
						</div>
						<div className="font-mono space-y-2 border border-blue-900/50 p-4 rounded-md bg-black">
							<p className="text-gray-400">
								$ create-better-t-stack{" "}
								<span className="text-yellow-400">--docker</span>
							</p>
							<p className="text-gray-400">
								$ create-better-t-stack{" "}
								<span className="text-yellow-400">--github-actions</span>
							</p>
							<p className="text-gray-400">
								$ create-better-t-stack{" "}
								<span className="text-yellow-400">--seo</span>
							</p>
							<p className="text-gray-400">
								$ create-better-t-stack{" "}
								<span className="text-yellow-400">--auth</span>
							</p>
						</div>
					</div>
				</div>

				<div className="mt-10 text-center">
					<div className="inline-block border border-blue-500/50 px-6 py-3 rounded-md bg-black hover:bg-blue-900/20 transition-colors font-mono">
						<span className="text-yellow-400">$</span>{" "}
						<span className="text-white">create-better-t-stack --yes</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CustomizableSection;
