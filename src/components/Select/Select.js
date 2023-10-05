import React, { useState, useEffect, useRef } from "react";

import { cn } from "@/utils";

export function Select({ children, className, multiSelect, handleSelect }) {
	const selectRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItems, setSelectedItems] = useState([]);

	const toggleSelect = () => setIsOpen((prev) => !prev);

	const handleItemClick = (item) => {
		let updatedItems;
		if (multiSelect) {
			updatedItems = selectedItems.includes(item)
				? selectedItems.filter((selectedItem) => selectedItem !== item)
				: [...selectedItems, item];
		} else {
			updatedItems = [item];
			setIsOpen(false);
		}

		setSelectedItems(updatedItems);
		handleSelect(updatedItems);
	};

	const handleControl = () => {
		let updatedItems;

		if (selectedItems.length > 0) {
			updatedItems = [];
		} else {
			const allNestedChildren = React.Children.toArray(children).flatMap(
				(child) => React.Children.toArray(child.props?.children || []),
			);

			updatedItems = allNestedChildren
				.filter((nestedChild) => nestedChild.props && nestedChild.props.value)
				.map((nestedChild) => nestedChild.props.value);
		}

		setSelectedItems(updatedItems);
		handleSelect(updatedItems);
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
		<div
			className={cn("flex flex-col relative space-y-2", className)}
			ref={selectRef}
		>
			{React.Children.map(children, (child) =>
				React.cloneElement(child, {
					isOpen,
					selectedItems,
					toggleSelect,
					handleItemClick,
					handleControl,
					multiSelect,
				}),
			)}
		</div>
	);
}
