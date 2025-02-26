const TerminalDisplay = () => {
	return (
		<div className="w-full max-w-4xl mx-auto relative z-10">
			<div className="border border-blue-500/30 rounded-md overflow-hidden bg-black">
				<div className="bg-blue-900/20 px-4 py-2 border-b border-blue-800/50 flex items-center">
					<div className="flex space-x-2 mr-4">
						<div className="w-3 h-3 rounded-full bg-red-500/60" />
						<div className="w-3 h-3 rounded-full bg-yellow-500/60" />
						<div className="w-3 h-3 rounded-full bg-green-500/60" />
					</div>
					<span className="text-blue-300 font-mono text-sm">
						create-better-t-stack --help
					</span>
				</div>

				<div className="p-6 font-mono text-sm space-y-4">
					<div>
						<div className="mt-2">
							<p className="text-blue-300 font-bold">Better-T Stack CLI</p>
							<p className="text-gray-500 mb-2">
								The ultimate TypeScript scaffolding tool
							</p>

							<div className="mt-4">
								<p className="text-yellow-200">Options:</p>
								<div className="pl-2 mt-1 text-gray-300">
									<p>
										<span className="text-blue-500">-y, --yes</span> Use default
										configuration
									</p>
									<p>
										<span className="text-blue-500">--no-database</span> Skip
										database setup
									</p>
									<p>
										<span className="text-blue-500">--sqlite</span> Use SQLite
										database
									</p>
									<p>
										<span className="text-blue-500">--postgres</span> Use
										PostgreSQL database
									</p>
									<p>
										<span className="text-blue-500">--auth</span> Include
										authentication
									</p>
									<p>
										<span className="text-blue-500">--no-auth</span> Exclude
										authentication
									</p>
								</div>
							</div>

							<div className="mt-4">
								<p className="text-yellow-200">Package Managers:</p>
								<div className="pl-2 mt-1 text-gray-300">
									<p>
										<span className="text-blue-500">--npm</span> Use npm package
										manager
									</p>
									<p>
										<span className="text-blue-500">--pnpm</span> Use pnpm
										package manager
									</p>
									<p>
										<span className="text-blue-500">--yarn</span> Use yarn
										package manager
									</p>
									<p>
										<span className="text-blue-500">--bun</span> Use bun package
										manager
									</p>
								</div>
							</div>

							<div className="mt-4">
								<p className="text-yellow-200">Features:</p>
								<div className="pl-2 mt-1 text-gray-300">
									<p>
										<span className="text-blue-500">--docker</span> Include
										Docker setup
									</p>
									<p>
										<span className="text-blue-500">--github-actions</span>{" "}
										Include GitHub Actions
									</p>
									<p>
										<span className="text-blue-500">--seo</span> Include SEO
										setup
									</p>
									<p>
										<span className="text-blue-500">--git</span> Include git
										setup
									</p>
									<p>
										<span className="text-blue-500">--no-git</span> Skip git
										initialization
									</p>
								</div>
							</div>

							<div className="mt-4">
								<p className="text-yellow-200">ORM:</p>
								<div className="pl-2 mt-1 text-gray-300">
									<p>
										<span className="text-blue-500">--drizzle</span> Use Drizzle
										ORM
									</p>
									<p>
										<span className="text-blue-500">--prisma</span> Use Prisma
										ORM (coming soon)
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="pt-2">
						<div className="flex">
							<span className="text-blue-500 mr-2">$</span>
							<span className="text-blue-500 animate-pulse">▌</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TerminalDisplay;
