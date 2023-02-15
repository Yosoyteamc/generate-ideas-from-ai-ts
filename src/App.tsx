import { ChangeEvent, useEffect, useState } from "react";

const ListProfiles: string[] = ["Streamer de Just Chatting", "Instagramer de moda y estilo", "Youtuber de videojuegos"];

function App() {
	const [profile, setProfile] = useState<string>();

	const changeProfilefromPreferences = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			setProfile(e.target.name);
		} else {
			setProfile("");
		}
	};

	const changeProfilefromInput = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const input = document.getElementById("input") as HTMLInputElement;
		if (input.value !== "") {
			setProfile(input.value);
		}
	};

	const resetInput = () => {
		//Reset input value if user press ESC
		window.addEventListener("keydown", (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				const input = document.getElementById("input") as HTMLInputElement;
				input.value = "";
				setProfile("");
			}
		});
	};

	useEffect(() => {
		if (profile) {
			console.log(profile);
		}
	}, [profile]);

	return (
		<div className="w-screen p-2 overflow-hidden h-screen bg-[#121416]">
			<div className="flex items-center justify-center w-full h-full flex-col">
				<div className="p-3 text-center">
					<h1 className="text-gray-300/80 text-4xl font-medium mb-6">
						Genera
						<span className="text-white"> miles de sugerencias </span>
						de contenido
					</h1>
					<p className="text-gray-300/80">Todas generadas por un algoritmo de inteligencia artificial.</p>
				</div>
				<form onSubmit={changeProfilefromInput} className="mt-6 bg-[#1d1f20] p-4 rounded-md w-[50%]">
					<input
						onChange={resetInput}
						className="bg-[#27292D] text-sm outline-none border border-gray-600/80 resize-none text-gray-300/80 p-3 rounded-md w-full"
						name="input-area"
						id="input"
						placeholder="Streamer, Instagramer de moda y estilo..."
					></input>
					<div className="flex justify-between mt-3">
						<div className="flex gap-2">
							<button
								type="submit"
								className="bg-[#224EFE] flex items-center gap-1 text-white text-xs p-1 px-3 rounded-md"
							>
								Generate
								<span className="text-white/50 text-base"> ↵</span>
							</button>
							<button
								type="reset"
								className="bg-[#27292D] border border-gray-600/80 text-white text-xs p-1 px-3 rounded-md"
							>
								Eliminar
								<span className="text-gray-500"> ESC</span>
							</button>
						</div>
						<button
							type="button"
							className="bg-[#27292D] border border-gray-600/80 text-white text-xs p-1 px-3 rounded-md"
						>
							Compartir
						</button>
					</div>
				</form>
				<div className="text-gray-400/80 mt-10 w-[50%]">
					<legend className="text-start text-sm">Perfiles predeterminados:</legend>
					<div className="flex gap-2 mt-2">
						<ul className="flex flex-wrap gap-2">
							{ListProfiles.map((profile, index) => (
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
			</div>
		</div>
	);
}

export default App;
