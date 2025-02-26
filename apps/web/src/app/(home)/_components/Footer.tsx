const Footer = () => {
	return (
		<footer className="relative bg-[#0C0C0C] w-full font-mono">
			<div className="max-w-6xl mx-auto px-4 py-12 relative">
				<div className="grid md:grid-cols-3 gap-8 mb-12">
					<div>
						<h3 className="text-white font-bold mb-3 text-lg">
							<span className="text-blue-500">$</span> better-t.stack
						</h3>
						<p className="text-gray-400">
							The ultimate TypeScript scaffolding tool for modern web
							development
						</p>
					</div>
					<div>
						<h3 className="text-white font-bold mb-3 text-lg">
							<span className="text-gray-400">$</span> links
						</h3>
						<ul className="text-gray-400 space-y-2">
							<li>
								<a
									href="https://github.com/better-t-stack/create-better-t-stack"
									className="hover:text-white transition-colors"
								>
									<span className="text-gray-500">-</span> GitHub
								</a>
							</li>
							<li>
								<a
									href="https://www.npmjs.com/package/create-better-t-stack"
									className="hover:text-white transition-colors"
								>
									<span className="text-gray-500">-</span> NPM
								</a>
							</li>
							<li>
								<a href="/docs" className="hover:text-white transition-colors">
									<span className="text-gray-500">-</span> Documentation
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-white font-bold mb-3 text-lg">
							<span className="text-gray-400">$</span> contact
						</h3>
						<p className="text-gray-400">
							<span className="text-gray-500">echo</span>{" "}
							&quot;hello@better-t-stack.dev&quot;
						</p>
					</div>
				</div>
				<div className="mt-12 pt-8 border-t border-gray-800/30">
					<p className="text-center text-gray-500">
						© {new Date().getFullYear()} Better-T Stack. All rights reserved.
					</p>
					<p className="text-center text-gray-600 text-sm mt-2">
						Made with <span className="text-blue-500">TypeScript</span> ♥
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
