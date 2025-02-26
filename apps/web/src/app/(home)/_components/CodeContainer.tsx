"use client";
import { useEffect, useRef, useState } from "react";

const CodeContainer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedPM, setSelectedPM] = useState<"npm" | "yarn" | "pnpm" | "bun">(
		"npm",
	);
	const [copied, setCopied] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const [typingComplete, setTypingComplete] = useState(false);
	const [currentStep, setCurrentStep] = useState(0);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const commands = {
		npm: "npx create-better-t-stack@latest",
		yarn: "yarn dlx create-better-t-stack",
		pnpm: "pnpm dlx create-better-t-stack",
		bun: "bunx create-better-t-stack",
	};

	const copyToClipboard = async (pm: "npm" | "yarn" | "pnpm" | "bun") => {
		await navigator.clipboard.writeText(commands[pm]);
		setSelectedPM(pm);
		setCopied(true);
		setIsOpen(false);
		setTimeout(() => setCopied(false), 2000);
	};

	useEffect(() => {
		if (!typingComplete) {
			const timer = setTimeout(() => {
				setTypingComplete(true);
			}, 1000);
			return () => clearTimeout(timer);
		}

		if (typingComplete && currentStep < 5) {
			const timer = setTimeout(() => {
				setCurrentStep((prev) => prev + 1);
			}, 800);
			return () => clearTimeout(timer);
		}
	}, [typingComplete, currentStep]);

	return (
		<div className="w-full max-w-3xl mx-auto mt-8">
			<div className="rounded-md bg-black border border-blue-500/30 overflow-hidden">
				<div className="flex items-center justify-between bg-blue-900/10 px-4 py-2 border-b border-blue-800/30">
					<div className="flex items-center">
						<div className="flex space-x-2">
							<div className="w-3 h-3 rounded-full bg-red-500/60" />
							<div className="w-3 h-3 rounded-full bg-yellow-500/60" />
							<div className="w-3 h-3 rounded-full bg-green-500/60" />
						</div>
						<div className="ml-4 text-sm text-blue-300 font-mono">terminal</div>
					</div>

					{/* Package Manager Selector */}
					<div className="relative" ref={menuRef}>
						<button
							type="button"
							onClick={() => setIsOpen(!isOpen)}
							className="flex items-center px-2 py-1 text-sm bg-black/50 rounded border border-blue-500/30 hover:bg-blue-900/20"
						>
							<span className="text-blue-400 mr-2">{selectedPM}</span>
							<svg
								className="w-4 h-4 text-blue-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<title>Toggle Dropdown</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
								/>
							</svg>
						</button>

						{isOpen && (
							<div className="absolute right-0 mt-2 w-36 bg-black border border-blue-500/30 rounded-md shadow-lg z-50">
								<ul>
									{(
										Object.keys(commands) as Array<
											"npm" | "yarn" | "pnpm" | "bun"
										>
									).map((pm) => (
										<li key={pm}>
											<button
												type="button"
												className={`block w-full text-left px-4 py-2 text-sm ${
													selectedPM === pm
														? "bg-blue-900/30 text-blue-400"
														: "text-gray-300 hover:bg-blue-900/20"
												}`}
												onClick={() => copyToClipboard(pm)}
											>
												{pm}
											</button>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>

				<div className="p-4 font-mono text-sm">
					<div className="flex items-center">
						<div className="flex-grow">
							<span className="text-blue-500 mr-2">$</span>
							<span className="text-white">{commands[selectedPM]}</span>
							<span
								className={
									typingComplete ? "hidden" : "text-blue-500 animate-pulse ml-1"
								}
							>
								▌
							</span>
						</div>
						<button
							type="button"
							onClick={() => copyToClipboard(selectedPM)}
							className="text-blue-400 hover:text-blue-300"
							title="Copy to clipboard"
						>
							{copied ? (
								<CheckIcon className="w-5 h-5" />
							) : (
								<CopyIcon className="w-5 h-5" />
							)}
						</button>
					</div>

					{typingComplete && (
						<>
							<div className="mt-2 pl-4 text-yellow-400">
								{currentStep >= 1 && (
									<p
										className={`transition-opacity duration-300 ${
											currentStep >= 1 ? "opacity-100" : "opacity-0"
										}`}
									>
										Creating a new Better-T-Stack project
									</p>
								)}
								{currentStep >= 2 && (
									<div className="mt-2">
										<p className="text-white">
											Project name:{" "}
											<span className="text-yellow-400">my-t-stack</span>
										</p>
										<p className="text-white">
											Database:{" "}
											<span className="text-yellow-400">postgres</span>
										</p>
										<p className="text-white">
											ORM: <span className="text-yellow-400">drizzle</span>
										</p>
										<p className="text-white">
											Authentication:{" "}
											<span className="text-yellow-400">yes</span>
										</p>
										<p className="text-white">
											Features:{" "}
											<span className="text-yellow-400">
												docker, github-actions, SEO
											</span>
										</p>
									</div>
								)}
							</div>

							{currentStep >= 3 && (
								<div className="mt-3 pl-4">
									<p className="text-blue-400">✓ Creating project structure</p>
									{currentStep >= 4 && (
										<p className="text-blue-400">✓ Installing dependencies</p>
									)}
									{currentStep >= 5 && (
										<>
											<p className="text-blue-400">✓ Setting up database</p>
											<p className="text-blue-400">
												✓ Configuring authentication
											</p>
											<p className="text-white mt-2">
												Project ready! Happy coding!
											</p>
										</>
									)}
								</div>
							)}
						</>
					)}

					<div className={`flex mt-4 ${typingComplete ? "" : "hidden"}`}>
						<span className="text-blue-500 mr-2">$</span>
						<span className="text-blue-500 animate-pulse">▌</span>
					</div>
				</div>
			</div>
		</div>
	);
};

const CopyIcon = ({ className = "" }) => (
	<svg
		className={className}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>copy</title>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
		/>
	</svg>
);

const CheckIcon = ({ className = "" }) => (
	<svg
		className={className}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>check</title>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M5 13l4 4L19 7"
		/>
	</svg>
);

export default CodeContainer;
