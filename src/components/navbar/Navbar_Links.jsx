import React from "react";
import { IoPerson } from "react-icons/io5"; 
import { FaClipboardList } from "react-icons/fa6";
import { VscProject } from "react-icons/vsc";
import { BsPersonWorkspace } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { Link } from "react-scroll";

const links = [
  { link: "About", section: "about", icon: <IoPerson /> },
  { link: "Skills", section: "skills", icon: <FaClipboardList /> }, 
  { link: "Projects", section: "projects", icon: <VscProject /> },
  { link: "Experience", section: "experience", icon: <BsPersonWorkspace /> },
  { link: "Contact", section: "contact", icon: <TiContacts /> },
];

function Navbar_Links() {
    return (
      <ul className="flex gap-6 text-2xl text-white font-body text-center py-4 lg:relative left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full">
        {links.map((link, index) => {
          return (
            <li key={index} className="group flex flex-col items-center relative">
              <Link
                to={link.section}
                smooth={true}
                spy={true}
                duration={500}
                offset={-130}
                className="cursor-pointer text-white hover:text-cyan transition-all duration-500 flex flex-col items-center"
              >
                {link.icon} 
              </Link>
              
              <div className="absolute bottom-[-3rem] flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 bg-orange rotate-45 z-0">
              </div>
              <div className="bg-orange text-black text-sm rounded-md px-3 py-1 z-10 relative">
                {link.link}
                </div>
            </div>
            </li>
          );
        })}
      </ul>
    );
  }
  
  export default Navbar_Links;