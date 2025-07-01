import React from "react";
import { Link } from "react-scroll";

function Navbar_Logo() {
  return (
    <div className="text-white text-2xl ml-[20px] cursor-pointer hover:scale-110 duration-500">
      <Link to="KM" smooth={true} spy={true} duration={500} offset={-130}>
        <h1 className="sm:hidden md:block font-bold">
          Khushi Maheshwari
        </h1>
      </Link>
     <Link to="KM" smooth={true} spy={true} duration={500} offset={-130}>
        <h1 className="text-white font-extrabold lg:text-4xl sm:text-3xl md:hidden sm:block hover:scale-110 duration-500">
          KM
        </h1>
      </Link>
    </div>
  );
}

export default Navbar_Logo;
