import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="flex text-white justify-between items-center bg-teal-600 p-3">
      <div>
        <h1 className="font-bold text-3xl cursor-pointer max-sm:text-lg">
          Golden<span className="text-[#ffd900]">Places</span>
        </h1>
      </div>
      <div>
        <ul className="flex text-lg gap-3 whitespace-nowrap max-sm:text-sm">
          <Link to="/">
            <li className="hover:text-[#ffd900] cursor-pointer">Home</li>
          </Link>
          <Link to="/place/new">
            <li className="hover:text-[#ffd900] cursor-pointer">New Places</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default header;
