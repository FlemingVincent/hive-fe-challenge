import { cn } from "@/utils";

export function SelectValue({
	placeholder = "Select...",
	className,
	selectedItems,
}) {
	return (
		<p className={cn("text-base truncate", className)}>
			{selectedItems.length ? (
				<span className="capitalize">{selectedItems.join(", ")}</span>
			) : (
				<span className="opacity-50">{placeholder}</span>
			)}
		</p>
	);
}
