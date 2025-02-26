"use client";
import ShinyText from "components/ShinyText/ShinyText";
import { useEffect, useState } from "react";
import BackgroundGradients from "./_components/BackgroundGradients";
import CodeContainer from "./_components/CodeContainer";
import CustomizableSection from "./_components/CustomizableSection";
import TechConstellation from "./_components/TechConstellation";
import TerminalDisplay from "./_components/Terminal";
import Testimonials from "./_components/Testimonials";

export default function HomePage() {
	const [version, setVersion] = useState("");
	const [versionLoading, setVersionLoading] = useState(true);

	useEffect(() => {
		const getLatestVersion = async () => {
			try {
				const res = await fetch(
					"https://registry.npmjs.org/create-better-t-stack/latest",
				);
				if (!res.ok) throw new Error("Failed to fetch version");
				const data = await res.json();
				setVersion(data.version);
			} catch (err) {
				console.error("Error fetching package version:", err);
				setVersion("1.0.0"); // Fallback version
			} finally {
				setVersionLoading(false);
			}
		};
		getLatestVersion();
	}, []);

	return (
		<main className="flex flex-col items-center justify-start sm:p-8 p-4 !pt-40 bg-[#0C0C0C] font-mono">
			<BackgroundGradients />
			<div className="max-w-6xl mx-auto text-center mb-16 relative z-50">
				<div className="relative z-10">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<h1 className="text-6xl font-extrabold relative">
							<span className="block sm:text-7xl text-6xl relative">
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
									Better-T Stack
								</span>
							</span>
							<div className="flex items-center justify-center mt-2">
								<span className="inline-block w-3 h-5 bg-blue-400 animate-pulse mr-2" />
								<span className="text-gray-300 text-xl font-mono">
									{versionLoading ? "[v1.0.0]" : `[v${version}]`}
								</span>
							</div>
						</h1>

						<div className="sm:text-2xl text-xl font-medium text-gray-300 max-w-2xl border border-gray-700/30 p-3 bg-black/30 rounded relative overflow-hidden group hover:border-blue-600/50 transition-all duration-300">
							<div className="absolute inset-0 bg-gradient-to-r from-gray-800/5 via-gray-700/10 to-gray-800/5 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
							<span className="text-gray-400 relative z-10">$</span>{" "}
							<span className="inline-block relative z-10">Scaffold</span>{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-100 relative z-10 font-bold">
								production-ready
							</span>{" "}
							<span className="inline-block relative z-10">
								projects in seconds
							</span>
							<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
						</div>

						<CodeContainer />
						<ShinyText
							text="Be the safest developer with typesafe Typescript"
							speed={3}
							className="sm:text-lg text-md text-gray-300"
						/>
					</div>
				</div>
				<div className="absolute inset-0 -z-10">
					<div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-gray-800/10 blur-3xl transform -skew-y-12" />
				</div>
			</div>
			<TerminalDisplay />

			<div className="w-full max-w-6xl mx-auto space-y-12 mt-12 relative z-50">
				<div className="text-center space-y-6 relative z-10 border border-gray-700/30 p-6 rounded-md bg-black/50">
					<div className="relative">
						<h2 className="sm:text-4xl text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-white to-gray-200 pb-2">
							<span className="text-gray-400">{">"}</span> A Symphony of Modern
							Tech
						</h2>
						<div className="absolute -inset-1 bg-gradient-to-r from-gray-800/0 via-gray-700/10 to-gray-800/0 blur-xl -z-10" />
					</div>
					<div className="space-y-4 max-w-3xl mx-auto">
						<p className="sm:text-xl text-gray-300 leading-relaxed font-mono">
							<span className="text-yellow-400">$</span> carefully orchestrated
							stack of{" "}
							<span className="text-blue-500 font-semibold">
								cutting-edge technologies
							</span>
							, working in perfect harmony
						</p>{" "}
						<div className="flex flex-wrap justify-center sm:gap-4 gap-2 sm:text-sm text-xs text-gray-400">
							<span className="px-3 py-1 bg-black border border-gray-700 rounded-sm hover:bg-gray-900/50 transition-colors">
								--end-to-end-type-safety
							</span>
							<span className="px-3 py-1 bg-black border border-gray-700 rounded-sm hover:bg-gray-900/50 transition-colors">
								--lightning-fast
							</span>
							<span className="px-3 py-1 bg-black border border-gray-700 rounded-sm hover:bg-gray-900/50 transition-colors">
								--modern-tools
							</span>
						</div>
					</div>
					<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/10 to-transparent -z-10" />
				</div>
			</div>
			<TechConstellation />
			<CustomizableSection />
			<Testimonials />
		</main>
	);
}
