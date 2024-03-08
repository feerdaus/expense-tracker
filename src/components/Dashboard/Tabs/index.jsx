import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "../../icons/AddIcon";
import { BarchartFill, BarchartOutline } from "../../icons/BarchartIcon";
import { HomeFill, HomeOutline } from "../../icons/HomeIcon";
import { UserFill, UserOutline } from "../../icons/UserIcon";
import { WalletFill, WalletOutline } from "../../icons/WalletIcon";
import Books from "./Books";
import Home from "./Home";
import Profile from "./Profile/index";
import Statistics from "./Statistics";
import TabIcon from "./TabIcon";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (num) => {
    setSelectedTab(num);
  };

  const tabs = [
    {
      icon: selectedTab === 1 ? HomeFill : HomeOutline,
      first: true,
      onClick: () => handleTabClick(1),
    },
    {
      icon: selectedTab === 2 ? BarchartFill : BarchartOutline,
      onClick: () => handleTabClick(2),
    },
    {
      icon: selectedTab === 3 ? WalletFill : WalletOutline,
      onClick: () => handleTabClick(3),
    },
    {
      icon: selectedTab === 4 ? UserFill : UserOutline,
      last: true,
      onClick: () => handleTabClick(4),
    },
  ];

  return (
    <div>
      <div>
        {selectedTab === 1 && <Home />}
        {selectedTab === 2 && <Statistics />}
        {selectedTab === 3 && <Books />}
        {selectedTab === 4 && <Profile />}
      </div>

      <div className="max-w-1300 w-full fixed bottom-11 z-20">
        <div className="p-4 bg-primary mx-auto w-fit rounded-full bx-shadow hover:scale-[1.05]">
          <Link to="/dashboard/add-expense">
            <AddIcon />
          </Link>
        </div>
      </div>
      <div className="flex justify-between shadow-top fixed bottom-0 max-w-1300 w-full  bg-white cursor-pointer mb-1">
        {tabs.map((tab, index) => (
          <TabIcon key={`${index}`} {...tab} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
