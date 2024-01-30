import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

function Header () {
  const [Icon, setIcon] = useState(false);
  return (
    <div className="flex text-white justify-between items-center bg-teal-800 p-3 ">
      <div>
        <h1 className="font-bold text-3xl cursor-pointer max-sm:text-xl">
          Golden<span className="text-[#ffd900]">Places</span>
        </h1>
      </div>
      <div>
        <ul className={`flex text-lg gap-3 whitespace-nowrap text-center ${!Icon ? 'max-sm:hidden' : ''} ${Icon ? 'max-sm:flex-col max-sm:fixed max-sm:top-[3.25rem] max-sm:bg-[#1ea999db] max-sm:right-0 max-sm:h-full max-sm:w-72 max-sm:justify-center' : ''}`}>
          <li className="hover:text-[#ffd900] cursor-pointer ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#ffd900] font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-[#ffd900] cursor-pointer ">
            <NavLink
              to="/place/new"
              className={({ isActive }) =>
                isActive ? "text-[#ffd900] font-semibold" : ""
              }
            >
              New Places
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="text-white sm:hidden">
        <FontAwesomeIcon icon={Icon ? faTimes : faBars}  size="xl" onClick={()=>setIcon(!Icon)}/>
      </div>
    </div>
  );
};

export default Header;
