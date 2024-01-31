import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

function Header () {
  const [Icon, setIcon] = useState(false);
  return (
    <div className="flex text-white justify-between items-center bg-teal-900 p-3 ">
      <div>
        <h1 className="font-bold text-3xl cursor-pointer max-sm:text-xl">
          Golden<span className="text-[#ffd900]">Places</span>
        </h1>
      </div>
      <div>
        <ul className={`flex md:flex-row text-lg gap-3 whitespace-nowrap text-center max-sm:absolute max-sm:top-[3.25rem] max-sm:bg-teal-700 max-sm:z-auto z-[1] right-0 max-sm:w-72 max-sm:justify-center max-sm:h-screen transition-all duration-500 ease-in-out 
          ${Icon ? ' flex-col z[-1] relative' : 'max-sm:flex-col max-sm:justify-center right-[-490px]'}`}>
          <li className="hover:text-[#ffd900] cursor-pointer ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#ffd900] font-semibold" : ""
              }
              onClick={()=>setIcon(false)}
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
              onClick={()=>setIcon(false)}
            >
              Add Places
            </NavLink>
          </li>
          <li className="hover:text-[#ffd900] cursor-pointer ">
            <NavLink
              to="/u1/places"
              className={({ isActive }) =>
                isActive ? "text-[#ffd900] font-semibold" : ""
              }
              onClick={()=>setIcon(false)}
            >
              My Places
            </NavLink>
          </li>
          <li className="hover:text-[#ffd900] cursor-pointer ">
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                isActive ? "text-[#ffd900] font-semibold" : ""
              }
              onClick={()=>setIcon(false)}
            >
              SignIn
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
