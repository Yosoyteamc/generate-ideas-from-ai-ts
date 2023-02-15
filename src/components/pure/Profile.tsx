import { useState } from "react";

type ProfileProps = {
	color: string;
};

interface ColorVariants {
	[key: string]: { bg: string; before: string; border: string; text: string };
}

const colorVariants: ColorVariants = {
	blue: {
		bg: "bg-blue-500/20",
		before: "before:bg-blue-500",
		border: "checked:border-blue-500",
		text: "text-blue-500",
	},
	red: {
		bg: "bg-red-500/20",
		before: "before:bg-red-500",
		border: "checked:border-red-500",
		text: "text-red-500",
	},
	purple: {
		bg: "bg-purple-500/20",
		before: "before:bg-purple-500",
		border: "checked:border-purple-500",
		text: "text-purple-500",
	},
};

export default function Profile({ color }: ProfileProps): JSX.Element {
	const [active, setActive] = useState<boolean>(false);

	const activated = (e: React.ChangeEvent<HTMLInputElement>) => {
		setActive(e.target.checked);
	};

	return (
		<li
			className={`relative border rounded-lg flex justify-between p-4 ${
				active ? colorVariants[color]?.border + " " + colorVariants[color]?.bg : "border-gray-500"
			} items-center`}
		>
			<div className="flex gap-3 items-center justify-center">
				<img src="" alt="Icono" />
				<div>
					<h2 className="text-white text-lg font-semibold">Default</h2>
					<p className={`text-sm font-medium ${active ? colorVariants[color]?.text : "text-gray-500"}`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, repudiandae.
					</p>
				</div>
			</div>
			<input
				onChange={activated}
				type="radio"
				name="profile"
				title={``}
				className={`appearance-none aspect-square w-8 max-w-[32px] relative rounded-full border-2 border-gray-500 before:content-[''] before:w-4 before:aspect-square before:lg:max-w-[30px] before:rounded-full before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] ${colorVariants[color]?.before} before:absolute before:opacity-0 checked:before:opacity-100 ${colorVariants[color]?.border} focus:outline-none`}
			/>
		</li>
	);
}
