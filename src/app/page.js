"use client";

import { Label } from "@/components/Label";
import {
	Select,
	SelectContent,
	SelectLabel,
	SelectTrigger,
	SelectValue,
	SelectItem,
	SelectControl,
} from "@/components/Select";

export default function Home() {
	return (
		<main className="h-[100vh] flex flex-row gap-x-4 items-center justify-center">
			<Select
				handleSelect={(selectedItem) => {
					console.log("selectedItems", selectedItem);
				}}
				multiSelect
			>
				<Label>Hobbies</Label>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select Hobbies" />
				</SelectTrigger>
				<SelectContent className="w-[180px]">
					<SelectControl />
					<SelectItem value="coding">Coding</SelectItem>
					<SelectItem value="lifting">Lifting</SelectItem>
					<SelectItem value="running">Running</SelectItem>
					<SelectItem value="soccer">Soccer</SelectItem>
					<SelectItem value="pickleball">Pickleball</SelectItem>
				</SelectContent>
			</Select>
			<Select
				handleSelect={(selectedItem) => {
					console.log("selectedItems", selectedItem);
				}}
			>
				<Label>Country</Label>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a Country" />
				</SelectTrigger>
				<SelectContent className="w-[180px]">
					<SelectLabel>Countries</SelectLabel>
					<SelectItem value="united states">United States</SelectItem>
					<SelectItem value="spain">Spain</SelectItem>
					<SelectItem value="brazil">Brazil</SelectItem>
					<SelectItem value="portugal">Portugal</SelectItem>
				</SelectContent>
			</Select>
		</main>
	);
}
