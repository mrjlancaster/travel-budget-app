import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

interface Value {
	label: string;
	value: string;
}

type Items = Value[];

// type Props = {
// 	value: any;
// 	items: Items;
// 	setValue: () => void;
// 	setItems: () => void;
// 	props: any;
// };

const AppDropdownPicker = ({
	open,
	setOpen,
	value,
	setValue,
	items,
	setItems,
	...props
}) => {
	// const [open, setOpen] = useState(false);

	return (
		<DropDownPicker
			open={open}
			value={value}
			items={items}
			setOpen={setOpen}
			setValue={setValue}
			setItems={setItems}
			{...props}
		/>
	);
};

export default AppDropdownPicker;
