import React from "react";
import ExpenseCard from "../../ExpenseCard";
import Wallet from "../../Wallet";
import Bell from "../../icons/Bell";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between items-center gradient-bg p-10 pb-20 sm:p-20 md:p-40 my-radius">
        <span className="text-white">
          <p className="md:text-lg font-medium">Hello,</p>
          <p className="font-bold text-2xl md:text-4xl">Enjelin Morgeana</p>
        </span>
        <span className="cursor-pointer hoverEff p-2 rounded-lg">
          <Bell />
        </span>
      </div>
      <div className="mx-3 md:mx-0 mb-10">
        <Wallet balance="56475" income="3452" expense="7789" />
      </div>
      <div className="max-w-4xl mx-auto p-4">
        <span className="flex justify-between items-center">
          <h3 className="font-semibold text-xl md:text-4xl">
            Transaction history
          </h3>
          <button className="btn-sm btn-outline">See all</button>
        </span>
        <hr className="my-4 md:my-8" />
        <div className="w-full md:w-3/4 mx-auto">
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
