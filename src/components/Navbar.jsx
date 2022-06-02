import React, { useState } from 'react';
import {FaBars, FaTimes, FaPhoneAlt} from 'react-icons/fa';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center bg-[#f8f9fb] lg:px-12 text-black-400 sm:px-2">
        <div>
            <h1 id="nav_brand" className="font-bold lg:text-2xl sm:ml-2 hover:text-blue-600 duration-300">
                <Link to="home" smooth={true} duration={500}>MORTGAGES WITH ANASTASIIA </Link>
            </h1>
        </div>

        {/* nav menu */}
       
            <ul className="hidden md:flex">
                <li className="hover:bg-blue-600 text-black hover:text-white duration-300 rounded-full">
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className="hover:bg-blue-600 text-black hover:text-white duration-300 rounded-full px-3">
                    <Link to="solutions" smooth={true} duration={500}>Solutions</Link>
                </li>
                <li className="hover:bg-blue-600 text-black hover:text-white duration-300 rounded-full px-3">
                    <Link to="resources" smooth={true} duration={500}>Resources</Link>
                </li>
                <li className="hover:bg-blue-600 text-black hover:text-white duration-300 rounded-full mr-2">
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>

                <a href="tel:16475755714" class="button" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-4 py-2 -my-2 border border-blue-600 hover:border-transparent duration-300 rounded-full">
                    <span className="group-hover:rotate-90 duration-300">
                        <FaPhoneAlt className="fill-current display: inline mr-1"/>
                    </span>
                   Call Now
                </a>
            </ul>
      

        {/* Hamburger Menu  */}
        <div onClick={handleClick} className="md:hidden z-10 mr-6">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile Menu */}
        
        <ul className={!nav ?  'hidden' : "absolute -top-20 duration-300 left-0 w-full h-screen bg-white flex flex-col justify-center items-center"}>
        
            <li className="py-3 text2xl font-bold hover:bg-blue-600 hover:text-white hover:px-[10%] duration-500 border border-none hover:border-transparent duration-400 rounded-full">
                <Link onClick={handleClick} to="home" smooth={true} duration={600}>Home</Link>
            </li>
            <li className="py-3 text2xl font-bold  hover:bg-blue-600 hover:text-white hover:px-[10%] duration-500 border border-none hover:border-transparent duration-400 rounded-full">
                <Link onClick={handleClick} to="solutions" smooth={true} duration={600}>Solutions</Link>
            </li>
            <li className="py-3 text2xl font-bold  hover:bg-blue-600 hover:text-white hover:px-[10%] duration-500 border border-none hover:border-transparent duration-400 rounded-full">
                <Link onClick={handleClick} to="resources" smooth={true} duration={600}>Resources</Link>
            </li>
            <li className="py-3 text2xl font-bold  hover:bg-blue-600 hover:text-white hover:px-[10%] duration-500 border border-none hover:border-transparent duration-400 rounded-full">
                <Link onClick={handleClick} to="contact" smooth={true} duration={600}>Contact</Link>
            </li>

                <a href="tel:16475755714" class="button" className=" font-bold bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white px-10 py-3 text2xl border border-none hover:border-transparent duration-500 rounded-full">
            <span className="group-hover:rotate-90 duration-300">
                <FaPhoneAlt className="fill-current display: inline mr-1"/>
             </span>
                   Call Now
                </a>
        </ul>


    </div>
  )
}

export default Navbar