import { cn } from "@/utils";

export function SelectControl({ className, selectedItems, handleControl }) {
	return (
		<button
			className={cn(
				"flex flex-row items-center justify-between text-base text-left truncate font-medium rounded-md h-10 px-3 py-2 hover:bg-neutral-100 transition-colors duration-200 ease-in-out",
				className,
			)}
			onClick={handleControl}
		>
			{selectedItems.length ? "Deselect All" : "Select All"}
		</button>
	);
}
