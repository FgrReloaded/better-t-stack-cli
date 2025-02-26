const testimonials = [
	{
		name: "$ user@dev.sh",
		role: "Senior",
		company: "TypeScript",
		avatar: ">_",
		content:
			"The type safety across the entire stack is exactly what I've been looking for. Incredible productivity boost.",
	},
	{
		name: "$ sarah@code.io",
		role: "Lead",
		company: "Engineer",
		avatar: "~/",
		content:
			"Better-T Stack simplified our deployment pipeline and improved our team's development experience tremendously.",
	},
	{
		name: "$ alex@terminal.dev",
		role: "Full-Stack",
		company: "Dev",
		avatar: "[]",
		content:
			"After switching to Better-T, our build times dropped by 60% and bug reports decreased significantly.",
	},
];

const Testimonials = () => {
	return (
		<section className="py-20 relative">
			<div className="absolute inset-0 bg-[#0C0C0C] opacity-90 z-0" />

			<div className="max-w-6xl mx-auto relative z-10">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-white">
						<span className="text-gray-400">$</span> cat testimonials.log
					</h2>
					<p className="text-gray-400 mt-4 text-lg font-mono">
						<span className="text-gray-500">Output:</span> Users reporting
						success with Better-T Stack
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.name}
							className="group rounded-md border border-gray-800 bg-black/70 p-6 hover:border-blue-500/30 transition-colors duration-200"
						>
							<div className="flex items-center space-x-4 mb-4">
								<div className="shrink-0">
									<div className="w-10 h-10 rounded-sm bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center text-gray-300 font-mono">
										{testimonial.avatar}
									</div>
								</div>
								<div>
									<h3 className="text-white font-mono">{testimonial.name}</h3>
									<p className="text-sm font-mono">
										<span className="text-gray-400">{testimonial.role}</span>
										<span className="text-gray-500 mx-1">@</span>
										<span className="text-gray-400">{testimonial.company}</span>
									</p>
								</div>
							</div>
							<p className="text-gray-300 leading-relaxed font-mono border-l-2 border-blue-700 pl-4">
								{testimonial.content}
							</p>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<div className="inline-block py-2 px-4 bg-black border border-gray-800 rounded-md">
						<span className="text-blue-500 font-bold mr-2">$</span>
						<span className="text-white font-mono">
							Join the growing community of developers
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
