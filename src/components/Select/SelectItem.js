import { cn } from "@/utils";

import { Check } from "lucide-react";

export function SelectItem({
	value,
	children,
	className,
	selectedItems,
	handleItemClick,
}) {
	return (
		<button
			className={cn(
				"flex flex-row items-center justify-between text-base text-left truncate rounded-md h-10 px-3 py-2 hover:bg-neutral-100 transition-colors duration-200 ease-in-out",
				className,
			)}
			onClick={() => handleItemClick(value)}
		>
			{children}
			{selectedItems.includes(value) && (
				<Check className="w-4 h-4 flex-shrink-0" />
			)}
		</button>
	);
}
