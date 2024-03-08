import React from "react";
import { Link } from "react-router-dom";

const Links = ({ link, icon, text }) => {
  return (
    <Link
      to={link}
      className="w-full flex items-center py-6 px-4 hover:shadow-md"
    >
      <span className="mr-12">{icon}</span>
      <p className="text-lg">{text}</p>
    </Link>
  );
};

export default Links;
