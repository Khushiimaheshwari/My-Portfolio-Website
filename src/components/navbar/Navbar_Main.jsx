import React from 'react'
import Navbar_Logo from './Navbar_Logo'
import Navbar_Links from './Navbar_Links'
import Navbar_btn from './Navbar_btn'
import NavbarToggler from './Navbar_Toggle'
import { useSelector } from "react-redux";
import Navbar_Links_SmallScreen from './Navbar_Links_SmallScreen'

function Navbar_Main() {
    const menuOpen = useSelector((state) => state.menu.menuOpen);

    return (
        <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-5">
            <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center lg:p-3 md:p-2 rounded-r-full rounded-l-full border-orange border-[0.5px] ">
                <Navbar_Logo/>
                
                { menuOpen ? (
                    <div className='sm:block lg:hidden'>
                        <Navbar_Links_SmallScreen/>
                    </div>
                    
                ) : (
                    <div className='sm:hidden lg:block'>
                        <Navbar_Links/>
                    </div>
                ) }
                <Navbar_btn/>
            </div>
            <div className="flex lg:hidden sm:block p-4 bg-black items-center justify-center rounded-full border-orange border-[0.5px] ">
            <NavbarToggler />
            </div>
        </nav>
    ) 
}

export default Navbar_Main
