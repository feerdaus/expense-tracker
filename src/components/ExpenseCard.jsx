import React from "react";
import ShoppingIcon from "./icons/ShoppingIcon";

const ExpenseCard = () => {
  return (
    <div className="flex items-center shadow-xl justify-between mx-auto p-3 mb-3">
      <div className="flex">
        <span className="p-2 bg-stone-200 rounded-xl mr-3">
          <ShoppingIcon />
        </span>
        <div>
          <p className="font-medium mb-3">Shopping</p>
          <p className="text-grey-50">Shopping</p>
        </div>
      </div>
      <div>
        <p className="text-red-600 font-medium text-lg mb-2">-$155</p>
        <p className="text-grey-50">date</p>
      </div>
    </div>
  );
};

export default ExpenseCard;
