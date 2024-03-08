import React, { useState } from "react";
import BackIcon from "../icons/BackIcon";
import HorizontalDots from "../icons/HorizontalDots";
import DashboardHead from "./Header";
import SelectInput from "./SelectInput";

const AddExpensePage = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { value: "Shopping", label: "Shopping" },
    { value: "Utilities", label: "utilities" },
    { value: "Gadgets", label: "gadgets" },
    { value: "Food", label: "food" },
    { value: "transportation", label: "Transportation" },
    { value: "miscellaneous", label: "Miscellaneous" },
  ];

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="max-w-1300 mx-auto">
      <DashboardHead
        leftIcon=<BackIcon />
        header="Add Expense"
        rightIcon=<HorizontalDots />
      />
      <div className="p-4 bg-white max-w-2xl mx-auto rounded-2xl shadow-lg">
        <SelectInput
          label="CATEGORY"
          options={options}
          value={selectedValue}
          onChange={handleSelectChange}
        />
        <p>Selected value: {selectedValue}</p>
      </div>
    </div>
  );
};

export default AddExpensePage;
