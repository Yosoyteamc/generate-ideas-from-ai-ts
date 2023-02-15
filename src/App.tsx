import Profile from "./components/pure/Profile";

function App() {
	return (
		<div className="w-screen p-2 overflow-hidden h-screen bg-[#181818]">
			<ul className="flex flex-col p-5 gap-4">
				<Profile color={"blue"}></Profile>
				<Profile color={"purple"}></Profile>
				<Profile color={"red"}></Profile>
			</ul>
		</div>
	);
}

export default App;
