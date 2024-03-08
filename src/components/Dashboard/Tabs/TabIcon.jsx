import React from "react";

const TabIcon = ({ icon, onClick, first, last }) => {
  return (
    <div
      className={`w-1/4 ${!last ? "border-r-2" : ""} ${
        !first ? "border-l-2" : ""
      } border-primary p-2 md:p-4 hover:bg-primary-50`}
      onClick={onClick}
    >
      <div className="mx-auto w-fit">{icon}</div>
    </div>
  );
};

export default TabIcon;
