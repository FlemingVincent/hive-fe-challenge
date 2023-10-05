import React from "react";
import { cn } from "@/utils";

export function SelectTrigger({
	children,
	className,
	isOpen,
	selectedItems,
	toggleSelect,
}) {
	return (
		<button
			className={cn(
				"flex flex-row h-10 items-center justify-between rounded-md border bg-white px-3 py-2",
				className,
			)}
			onClick={toggleSelect}
		>
			{React.cloneElement(children, {
				isOpen,
				selectedItems,
			})}
		</button>
	);
}
