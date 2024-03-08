import React from "react";
import BackIcon from "../../../icons/BackIcon";
import HorizontalDots from "../../../icons/HorizontalDots";
import { LockFillBlack } from "../../../icons/Lock";
import { MailIconFill } from "../../../icons/MailIcon";
import { ShieldFillBlack } from "../../../icons/Shield";
import { TwoUserFillBlack, UserFillBlack } from "../../../icons/UserIcon";
import DashboardHead from "../../Header";
import Links from "./Links";

const Profile = () => {
  const profileLinks = [
    {
      icon: UserFillBlack,
      text: "Account Info",
      to: "/",
    },
    {
      icon: TwoUserFillBlack,
      text: "Personal Profile",
      to: "/",
    },
    {
      icon: MailIconFill,
      text: "Message center",
      to: "/",
    },
    {
      icon: ShieldFillBlack,
      text: "Login and security",
      to: "/",
    },
    {
      icon: LockFillBlack,
      text: "Data and Privacy",
      to: "/",
    },
  ];

  return (
    <div className="">
      <DashboardHead
        leftIcon=<BackIcon />
        header="Profile"
        rightIcon=<HorizontalDots />
      />
      <div className="h-[120px] bg-gray-200 w-[120px] bgProfile rounded-full mx-auto mb-5"></div>
      <div className="mb-10">
        <p className="text-lg md:text-2xl font-semibold text-center">
          Enjelin Morgeana
        </p>
        <p className="text-primary text-center">@enjelin_morgeana</p>
      </div>

      <div className="max-w-xl mx-auto px-10 mb-22">
        <div className=" py-5 px-2 flex items-center hover:shadow-md">
          <span className="bg-primary-50 p-3 rounded-2xl mr-7">
            <img src="/diamond.png"></img>
          </span>
          <p className="md:text-xl ">Invite friends</p>
        </div>
        <hr className="mb-4" />
        {profileLinks.map(({ icon, text, to }, index) => (
          <Links key={`${text}-${index}`} icon={icon} text={text} to={to} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
