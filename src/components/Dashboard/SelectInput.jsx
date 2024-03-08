import React from "react";

const SelectInput = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label htmlFor="select">{label}</label>
      <select
        id="select"
        value={value}
        className="block w-full outline outline-2 mt-1 outline-gray-200 px-3 py-2 color bg-transparent"
        onChange={onChange}
      >
        {options.map((option) => (
          <option
            className="bg-transparent"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
