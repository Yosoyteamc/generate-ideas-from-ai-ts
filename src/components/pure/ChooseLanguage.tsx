export default function ChooseLanguage(): JSX.Element {
	return (
		<div className="w-full flex justify-center p-3">
			<p className="mr-3">Language:</p>
			<select className="rounded-xl appearance-none bg-gray-200 px-4 py-1 text-center">
				<option value="en">English</option>
				<option value="es">Español</option>
			</select>
		</div>
	);
}
