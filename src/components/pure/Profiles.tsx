import { useEffect, useState } from "react";
import { Profile } from "../../interfaces/Interfaces";

interface Props {
	changeProfilefromPreferences: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Profiles({ changeProfilefromPreferences }: Props): JSX.Element {
	const [ListProfiles, setListProfiles] = useState<string[]>();

	const getProfiles = async () => {
		try {
			const response = await fetch("https://63ed433c3d9c852c3f587be7.mockapi.io/profiles").then((res) => res.json());
			// console.log(response);
			const List: string[] = [];
			response &&
				(response.map((profile: Profile) => {
					profile.type.map((type: string) => {
						//random number 0 or 1
						const random = Math.round(Math.random());
						//if random is 1, add profile to list
						if (random) {
							List.push(`${profile.name} ${type}`);
						}
					});
				}) as string[]);
			setListProfiles(List);
		} catch (error) {
			throw new Error("Error al obtener los perfiles");
		}
	};

	useEffect(() => {
		getProfiles();
	}, []);

	return (
		<div className="text-gray-400/80 mt-10 w-[50%]">
			<legend className="text-start text-sm">Perfiles predeterminados:</legend>
			<div className="flex gap-2 mt-2">
				<ul className="flex flex-wrap gap-2">
					{ListProfiles &&
						ListProfiles.map((profile, index) => (
							<li className="relative" key={index}>
								<input
									type="checkbox"
									name={profile}
									id={profile}
									className={`bg-[#27292D] absolute opacity-0 text-xs p-1 px-3 rounded-md peer`}
									title={"Agregar perfil: " + profile}
									onChange={changeProfilefromPreferences}
								></input>
								<label
									htmlFor={profile}
									className="text-xs select-none text-gray-200 bg-[#27292D] border border-gray-600/80 p-1 px-3 rounded-full cursor-pointer peer-checked:bg-[#224EFE] peer-checked:border-[#224EFE]"
								>
									{profile}
								</label>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}
