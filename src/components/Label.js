import { cn } from "@/utils";

export function Label({ children, className }) {
	return <p className={cn("text-sm font-medium", className)}>{children}</p>;
}
