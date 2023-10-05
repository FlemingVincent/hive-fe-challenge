import { cn } from "@/utils";

export function SelectControl({ className, selectedItems }) {
	return (
		<button
			className={cn(
				"flex flex-row items-center justify-between text-base text-left truncate font-medium rounded-md h-10 px-3 py-2",
				className,
			)}
		>
			{selectedItems.length ? "Deselect All" : "Select All"}
		</button>
	);
}
