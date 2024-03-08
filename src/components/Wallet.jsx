import { useState } from "react";
import ArrowDown from "./icons/ArrowDown";
import ArrowUp from "./icons/ArrowUp";
import CaretDown from "./icons/CaretDown";
import CaretUp from "./icons/CaretUp";
import HorizontalDots from "./icons/HorizontalDots";

const Wallet = ({ balance, income, expense }) => {
  const [showBudget, setShowBudget] = useState(false);

  const handleToggleBudget = () => {
    setShowBudget(!showBudget);
  };

  return (
    <div className="rounded-24 dark-bg bx-shadow px-4 py-5 max-w-md mx-auto text-white">
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <p className="font-semibold mr-1">Total Balance</p>
          <span onClick={handleToggleBudget} className="cursor-pointer ">
            {showBudget ? <CaretUp /> : <CaretDown />}
          </span>
        </div>
        <HorizontalDots />
      </div>

      <p
        className="font-semibold text-3xl"
        style={{ opacity: showBudget ? 1 : 0 }}
      >
        $ {Number(balance).toLocaleString()}
      </p>

      <div className="flex justify-between mt-11">
        <div>
          <span className="flex items-center mb-1">
            <ArrowDown />
            <p className="ml-1 text-lg">Income</p>
          </span>
          <p className="font-semibold text-2xl">
            {Number(income).toLocaleString()}
          </p>
        </div>
        <div>
          <span className="flex items-center mb-1">
            <ArrowUp />
            <p className="ml-1 text-lg">Expenses</p>
          </span>
          <p className="font-semibold text-2xl">
            $ {Number(expense).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
