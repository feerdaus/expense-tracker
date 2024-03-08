import React from "react";

const DashboardHead = ({ leftIcon, header, rightIcon }) => {
  return (
    <div>
      <div className="bgImg h-400 -mb-15">
        <div className="flex justify-between items-center pt-10 md:pt-15 px-5 md:px-10">
          <a href="" className="hoverEff p-2">
            {leftIcon}
          </a>

          <p className="text-xl md:text-3xl font-semibold text-white">
            {header}
          </p>
          <span className="hoverEff p-2 cursor-pointer">{rightIcon}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHead;
