import React, { useState } from 'react';
import logo from '../../images/Capa 1.png';
import { FaBars } from 'react-icons/fa'; 
import { FaTimes } from 'react-icons/fa'; 

const NavbarItem = ({title, classProps}) => {
    return(
        <li className={`text-3xl ml-[1.50rem] font-serif text-white hover:text-slate-300 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="container mx-auto">
            <div className="flex mobile-S-Laptop:justify-between">
                <div className="flex w-2/4">
                    <img className="ml-8 mt-3 w-10 h-16" src={logo} alt="LogoImg"/>
                    <h1 className='text-3xl mobile-S:text-lg  font-serif text-stone-50 cursor-pointer mt-8 ml-4'>
                        CryptoCoffee
                    </h1>
                </div>
                <div className='w-2/4 h-full pt-8 mobile-S-Laptop:hidden'>
                    <ul className='list-none flex justify-end'>
                    {["Documentation", "About us", "Help"].map((item, index) => (
                        <NavbarItem key={item + index} title={item}/>
                    ))}
                    </ul>
                </div>
                <div className='pt-[1.50rem] mr-[1.50rem]'>
                    {toggleMenu
                        ?<FaTimes fontSize={28} className='text-white cursor-pointer laptop:hidden laptop-L:hidden' onClick={() => setToggleMenu(false)}/>
                        :<FaBars fontSize={28} className='text-white cursor-pointer laptop:hidden laptop-L:hidden 4k:hidden' onClick={() => setToggleMenu(true)}/>
                    }
                    {toggleMenu && (
                        <ul
                            className='z-10 fixed top-0 right-2 p-3 w-[70vw] h-screen shadow-2xl laptop:hidden laptop-L:hidden list-none flex flex-col justify-start items-end rounded-md bg-black blue-glassmorphism'
                        >
                            <li className='text-xl w-full my-2'>
                            <FaTimes className='text-white text-2xl' onClick={() => setToggleMenu(false)}/>
                            </li>
                            {["Documentation", "About us", "Help"].map((item, index) => (
                                <NavbarItem key={item + index} title={item} classProps='my-2 text-2xl text-white'/>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
          </div>
      </div>
    );
}
export default Navbar;