import { SiTailwindcss } from "react-icons/si";

const App = () => {
	return (
		<main className="flex items-center justify-center h-screen">
			<p className="p-2 text-2xl capitalize bg-red-300">
				use this template for react practice with tailwind
				<SiTailwindcss className="inline mx-1 text-cyan-500" />
			</p>
		</main>
	);
};

export default App;
