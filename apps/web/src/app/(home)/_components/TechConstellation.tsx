"use client";

import { technologies } from "@/lib/constant";
import { type JSX, useEffect, useRef, useState } from "react";

type TechConstellationProp = {
	fromRef: React.RefObject<HTMLElement>;
	toRef: React.RefObject<HTMLElement>;
	containerRef: React.RefObject<HTMLElement>;
	delay?: number;
	curveDirection?: number;
};

const AnimatedBeam = ({
	fromRef,
	toRef,
	containerRef,
	delay = 0,
	curveDirection = 50,
}: TechConstellationProp) => {
	const [path, setPath] = useState("");

	useEffect(() => {
		const updatePath = () => {
			if (!fromRef.current || !toRef.current || !containerRef.current) return;

			const containerRect = containerRef.current.getBoundingClientRect();
			const fromRect = fromRef.current.getBoundingClientRect();
			const toRect = toRef.current.getBoundingClientRect();

			const fromX = fromRect.left - containerRect.left + fromRect.width / 2;
			const fromY = fromRect.top - containerRect.top + fromRect.height / 2;
			const toX = toRect.left - containerRect.left + toRect.width / 2;
			const toY = toRect.top - containerRect.top + toRect.height / 2;

			setPath(
				`M ${fromX},${fromY} Q ${(fromX + toX) / 2},${
					(fromY + toY) / 2 - curveDirection
				} ${toX},${toY}`,
			);
		};

		updatePath();
		window.addEventListener("resize", updatePath);
		return () => window.removeEventListener("resize", updatePath);
	}, [fromRef, toRef, containerRef, curveDirection]);

	return (
		<svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
			<title>Tech Stack</title>
			<path
				d={path}
				fill="none"
				stroke="url(#blueGradient)"
				strokeWidth="2"
				className="opacity-40"
				filter="url(#glow)"
			>
				<animate
					attributeName="stroke-dasharray"
					values="0,1000;1000,0"
					dur="3s"
					begin={`${delay}s`}
					repeatCount="indefinite"
				/>
			</path>
			<defs>
				<linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="rgba(37, 99, 235, 0)" />
					<stop offset="50%" stopColor="rgba(59, 130, 246, 1)" />
					<stop offset="100%" stopColor="rgba(37, 99, 235, 0)" />
				</linearGradient>
				<filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
					<feGaussianBlur stdDeviation="2.5" result="blur" />
					<feMerge>
						<feMergeNode in="blur" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>
		</svg>
	);
};

const TechConstellation = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const centerRef = useRef<HTMLDivElement>(null);
	const techRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
	const [isVisible, setIsVisible] = useState(false);
	const [stars, setStars] = useState<
		Array<{
			left: string;
			top: string;
			delay: string;
			size: string;
		}>
	>([]);

	useEffect(() => {
		const newStars = Array.from({ length: 60 }, () => ({
			left: `${Math.random() * 100}%`,
			top: `${Math.random() * 100}%`,
			delay: `${Math.random() * 5}s`,
			size: `${Math.random() * 3 + 1}px`,
		}));
		setStars(newStars);
	}, []);

	const calculateRadius = (category: string) => {
		switch (category) {
			case "core":
				return 200; // Increased for better spacing
			case "frontend":
				return 300; // Increased for better spacing
			case "backend":
				return 320; // Increased and differentiated from frontend
			default:
				return 250;
		}
	};

	const renderCategoryBeams = (category: string) => {
		const categoryTechs = technologies.filter(
			(tech) => tech.category === category,
		);
		const beams: JSX.Element[] = [];

		if (category !== "core") {
			categoryTechs.forEach((tech, index) => {
				const curveDirection = tech.category === "frontend" ? 50 : -50;
				beams.push(
					<AnimatedBeam
						key={`beam-center-${tech.name}`}
						fromRef={centerRef as React.RefObject<HTMLElement>}
						toRef={{ current: techRefs.current[tech.name] as HTMLElement }}
						containerRef={containerRef as React.RefObject<HTMLElement>}
						delay={index * 0.2}
						curveDirection={curveDirection}
					/>,
				);
			});
		}

		for (let i = 0; i < categoryTechs.length - 1; i++) {
			const curveDirection = category === "frontend" ? 30 : -30;
			beams.push(
				<AnimatedBeam
					key={`beam-${categoryTechs[i].name}-${categoryTechs[i + 1].name}`}
					fromRef={{
						current: techRefs.current[categoryTechs[i].name] as HTMLElement,
					}}
					toRef={{
						current: techRefs.current[categoryTechs[i + 1].name] as HTMLElement,
					}}
					containerRef={containerRef as React.RefObject<HTMLElement>}
					delay={(i + categoryTechs.length) * 0.2}
					curveDirection={curveDirection}
				/>,
			);
		}

		if (category === "core") {
			beams.push(
				<AnimatedBeam
					key="beam-core-connection"
					fromRef={{ current: techRefs.current.Bun as HTMLElement }}
					toRef={{ current: techRefs.current.tRPC as HTMLElement }}
					containerRef={containerRef as React.RefObject<HTMLElement>}
					delay={0}
					curveDirection={0}
				/>,
			);
		}

		return beams;
	};

	useEffect(() => {
		setIsVisible(true);
	}, []);

	// Function to determine label position based on angle
	const getLabelPosition = (angle: number) => {
		// Top half of the circle
		if (angle >= -90 && angle <= 90) {
			return "-top-[70px]";
		}
		// Bottom half of the circle
		return "top-[60px]";
	};

	return (
		<div
			ref={containerRef}
			className="relative z-50 w-full h-[90vh] bg-gradient-to-b from-transparent mt-8 via-gray-950 to-transparent overflow-auto flex items-center justify-center"
		>
			{/* Center Node */}
			<div
				ref={centerRef}
				className={`absolute z-10 w-28 h-28 bg-gradient-to-br from-blue-600 to-blue-800
                     rounded-full flex items-center justify-center transform transition-all duration-1000
                     border-2 border-blue-400 shadow-[0_0_20px_5px_rgba(37,99,235,0.5)]
                     animate-pulse-slow
                     ${
												isVisible
													? "scale-100 opacity-100"
													: "scale-0 opacity-0"
											}`}
			>
				<div className="absolute inset-3 bg-noise opacity-10 rounded-full" />
				<span className="text-3xl font-bold text-white z-10 shiny-text">
					TS
				</span>
			</div>

			{/* Technology Nodes */}
			{technologies.map((tech, index) => {
				const radius = calculateRadius(tech.category);
				const x = Math.cos((tech.angle * Math.PI) / 180) * radius;
				const y = Math.sin((tech.angle * Math.PI) / 180) * radius;
				const defaultLabelPos = getLabelPosition(tech.angle);

				return (
					<div
						key={tech.name}
						ref={(el) => {
							techRefs.current[tech.name] = el;
						}}
						className={`absolute z-20 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000
                          ${
														isVisible
															? "scale-100 opacity-100"
															: "scale-0 opacity-0"
													}`}
						style={{
							left: `calc(50% + ${x}px)`,
							top: `calc(50% + ${y}px)`,
							transitionDelay: `${index * 100}ms`,
						}}
					>
						<div
							className={`w-16 h-16 ${tech.color} rounded-full flex items-center justify-center
                              transform hover:scale-125 transition-all duration-300 cursor-pointer
                              shadow-[0_0_10px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]
                              hover:rotate-12 border border-opacity-30 border-white`}
						>
							<tech.icon className={`w-8 h-8 ${tech.textColor}`} />
						</div>

						<div
							className={`absolute ${tech.top || defaultLabelPos} ${
								tech.left || "left-1/2"
							}
                              transform -translate-x-1/2 bg-gradient-to-br from-gray-900/90 to-gray-950/90
                              text-white px-4 py-2.5 rounded-lg transition-all duration-300
                              whitespace-nowrap text-xs hover:scale-105 backdrop-blur-sm
                              border border-blue-800/30 shadow-[0_0_10px_rgba(0,0,0,0.4)]
                              group min-w-[160px] text-center z-30`}
						>
							<div className="absolute inset-0 bg-noise opacity-10 rounded-lg" />
							<strong className="text-sm text-blue-200 block">
								{tech.name}
							</strong>
							<p className="text-gray-300 mt-1">{tech.description}</p>
							<div
								className="absolute h-0.5 w-0 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0
                                bottom-0 left-0 group-hover:w-full transition-all duration-500 border-beam"
							/>
						</div>
					</div>
				);
			})}

			{isVisible && (
				<>
					{renderCategoryBeams("core")}
					{renderCategoryBeams("frontend")}
					{renderCategoryBeams("backend")}
				</>
			)}

			{/* Starry Background */}
			<div className="absolute inset-0 overflow-hidden">
				{stars.map((star) => (
					<div
						key={star.size}
						className="absolute rounded-full animate-twinkle"
						style={{
							left: star.left,
							top: star.top,
							width: star.size,
							height: star.size,
							animationDelay: star.delay,
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default TechConstellation;
