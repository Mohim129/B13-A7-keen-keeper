import { ChartLine, Clock, House } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-white bg-[#244D3F] font-semibold" : ""
          }
        >
         <House></House> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            isActive ? "text-white bg-[#244D3F] font-semibold" : ""
          }
        >
          <Clock></Clock> Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/stats"}
          className={({ isActive }) =>
            isActive ? "text-white bg-[#244D3F] font-semibold" : ""
          }
        >
          <ChartLine></ChartLine> Stats
        </NavLink>
      </li>
    </>
  );
    return (
      <div className="bg-base-100 shadow-sm">
        <div className="navbar container mx-auto ">
          <div className="flex-1 mr-4">
            <NavLink to={"/"} className="text-2xl ">
              <span className="text-[#1F2937] font-extrabold">Keen</span>
              <span className="text-[#244D3F] font-semibold">Keeper</span>
            </NavLink>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 text-[#64748B] sm:text-[16px] text-[12px]">
              {links}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;