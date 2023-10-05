import React from "react";
import { cn } from "@/utils";

export function SelectContent({
	children,
	className,
	isOpen,
	selectedItems,
	handleItemClick,
	handleControl,
	multiSelect,
}) {
	if (!isOpen) return null;

	return (
		<div
			className={cn(
				"absolute top-full left-0 z-50 flex flex-col rounded-md border shadow-md bg-white p-1 w-full max-w-full",
				className,
			)}
		>
			{React.Children.map(children, (child) =>
				React.cloneElement(child, {
					selectedItems,
					handleItemClick,
					handleControl,
					multiSelect,
				}),
			)}
		</div>
	);
}
