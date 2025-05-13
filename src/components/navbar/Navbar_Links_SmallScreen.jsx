import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoPerson } from "react-icons/io5"; 
import { FaClipboardList } from "react-icons/fa6";
import { VscProject } from "react-icons/vsc";
import { BsPersonWorkspace } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { dropdownVariants } from "../../FramerMotion/varients";
import { Link } from "react-scroll";

const links = [
  { link: "About", section: "about", icon: <IoPerson /> },
  { link: "Skills", section: "skills", icon: <FaClipboardList /> }, 
  { link: "Projects", section: "projects", icon: <VscProject /> },
  { link: "Experience", section: "experience", icon: <BsPersonWorkspace /> },
  { link: "Contact", section: "contact", icon: <TiContacts /> },
];

function Navbar_Links_SmallScreen() {
    
    return (
        <AnimatePresence>
            <motion.ul 
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants()}
                className="absolute right-7 top-22 z-50 flex flex-col items-center gap-6 px-4 py-6 backdrop-blur-lg bg-white/10 border lg:hidden border-orange rounded-xl shadow-lg">
                {links.map((link, index) => (
                    <li
                    key={index}
                    className="group relative flex flex-col items-center text-white text-2xl cursor-pointer">
                        <Link
                            to={link.section}
                            smooth={true}
                            spy={true}
                            duration={500}
                            offset={-130}
                            className="hover:text-orange transition duration-300">
                            {link.icon}
                        </Link>

                        {/* Tooltip on hover */}
                        <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange rotate-45"></div>
                            <div className=" bg-orange text-black text-sm px-3 py-1 rounded-md shadow-md whitespace-nowrap z-10">
                            {link.link}
                            </div>
                        </div>
                    </li>
                ))}
            </motion.ul>
        </AnimatePresence>
    );
  }
  
  export default Navbar_Links_SmallScreen;