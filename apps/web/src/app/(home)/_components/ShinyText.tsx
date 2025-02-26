import { useEffect, useState } from "react";

interface ShinyTextProps {
	text: string;
	speed?: number;
	className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
	text,
	speed = 5,
	className = "",
}) => {
	const [position, setPosition] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setPosition((prev) => (prev + 1) % (text.length + 15));
		}, 1000 / speed);

		return () => clearInterval(interval);
	}, [text.length, speed]);

	return (
		<div className={`font-mono relative ${className}`}>
			{text.split("").map((char, index) => {
				const isShiny = Math.abs(index - position) < 3;
				return (
					<span
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className={`inline-block ${
							isShiny ? "text-green-300" : ""
						} transition-colors duration-300`}
					>
						{char}
					</span>
				);
			})}
		</div>
	);
};

export default ShinyText;
