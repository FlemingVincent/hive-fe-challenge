import { useState, useEffect, useRef } from "react";

import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/utils";

export default function Select({
	label = "Label",
	options = ["Default Option"],
	multiSelect = false,
	checkmarks = true,
	onSelect,
	className,
}) {
	const selectRef = useRef(null);

	const [isOpen, setIsOpen] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState([]);

	const toggleSelect = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option) => {
		let updatedOptions;
		if (multiSelect) {
			updatedOptions = selectedOptions.includes(option)
				? selectedOptions.filter((item) => item !== option)
				: [...selectedOptions, option];
		} else {
			updatedOptions = [option];
			setIsOpen(false);
		}

		setSelectedOptions(updatedOptions);
		onSelect(updatedOptions);
	};

	const handleSelectDeselectAll = () => {
		const updatedOptions = selectedOptions.length ? [] : options;
		setSelectedOptions(updatedOptions);
		onSelect(updatedOptions);
	};

	const handleClickOutside = (event) => {
		if (selectRef.current && !selectRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div className={cn("min-w-[180px] relative", className)} ref={selectRef}>
			<button
				className={cn(
					"flex flex-row h-10 w-full max-w-full items-center justify-between rounded-md border bg-white px-3 py-2",
					isOpen
						? "border-neutral-600 transition-colors duration-200 ease-in-out"
						: "border-neutral-200 duration-200 ease-in-out",
				)}
				onClick={toggleSelect}
			>
				<p className="text-sm truncate">
					{selectedOptions.length ? (
						selectedOptions.join(", ")
					) : (
						<span className="opacity-50">{label}</span>
					)}
				</p>
				<ChevronDown
					className={cn(
						"h-4 w-4 flex-shrink-0",
						isOpen
							? "transform rotate-180 transition-transform duration-200 ease-in-out"
							: "transition-transform duration-200 ease-in-out",
					)}
				/>
			</button>
			{isOpen && (
				<div className="absolute w-full max-w-full max-h-[162px] top-12 z-50 rounded-md border shadow-md bg-white overflow-y-auto p-1">
					{multiSelect && (
						<button
							className="w-full h-10 py-1.5 pl-8 pr-2"
							onClick={handleSelectDeselectAll}
						>
							<p className="text-sm text-left font-semibold">
								{selectedOptions.length ? "Deselect All" : "Select All"}
							</p>
						</button>
					)}
					{options.map((option, index) => (
						<button
							className="relative flex w-full max-w-full items-center rounded-md h-10 py-1.5 pl-8 pr-2 hover:bg-neutral-100 transition-colors duration-200 ease-in-out"
							key={index}
							onClick={() => handleOptionClick(option)}
						>
							{checkmarks && selectedOptions.includes(option) && (
								<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
									<Check className="h-4 w-4" />
								</span>
							)}
							<p className="text-sm truncate">{option}</p>
						</button>
					))}
				</div>
			)}
		</div>
	);
}
