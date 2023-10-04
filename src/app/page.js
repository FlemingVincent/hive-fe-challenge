"use client";

import Select from "@/components/Select";

export default function Home() {
	return (
		<main className="h-[100vh] flex flex-row items-center justify-center gap-x-4">
			<Select
				label="MultiSelect"
				options={["Option 1", "Option 2", "Option 3", "Option 4"]}
				multiSelect
				onSelect={(selectedOption) =>
					console.log("MultiSelect:", selectedOption)
				}
				className="max-w-[180px]"
			/>
			<Select
				label="Select"
				options={["Option 1", "Option 2", "Option 3"]}
				checkmarks={false}
				onSelect={(selectedOption) => console.log("Select:", selectedOption)}
				className="max-w-[180px]"
			/>
		</main>
	);
}
