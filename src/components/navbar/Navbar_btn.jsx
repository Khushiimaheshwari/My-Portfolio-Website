import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from 'react-scroll';

function Navbar_btn() {
    return (
        <button className=' px-3 py-2 mr-[18px] rounded-full md:text-lg sm:text-md font-bold font-body text-white border-cyan border bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange  hover:text-black cursor-pointer hover:shadow-cyanShadow'>
            <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to="contact"
                className="flex items-center gap-2 cursor-pointer text-white hover:text-black transition-all duration-500">
                Hire Me
                <div className='sm:hidden md:block'>
                <LuArrowDownRight />
                </div>
            </Link>
        </button>
    )
}

export default Navbar_btn
