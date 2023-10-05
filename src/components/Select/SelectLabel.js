import { cn } from "@/utils";

export function SelectLabel({ children, className }) {
	return (
		<div
			className={cn(
				"flex flex-row items-center justify-between h-10 px-3 py-2 border-b mb-1",
				className,
			)}
		>
			<p className="text-base text-left font-medium truncate">{children}</p>
		</div>
	);
}
