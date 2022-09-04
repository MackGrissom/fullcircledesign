import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu ,AiOutlineInstagram} from 'react-icons/ai';
import {Nav, NavLink, NavMenu } from './NavbarElements'
// import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';

const Navbar = () => {
   
    const [nav, setNav] = useState(false);
    const [show, setShow] = useState(true);
    
    const controlNavbar = ()=> {
        if (window.scrollY>100) {
            setShow(false)
        } else {
            setShow(true)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return() => {
            window.removeEventListener('scroll', controlNavbar)
        }
    })


    const handleNav = () => {
        setNav(!nav);
    };
    
    return (

        <div onScroll={ controlNavbar}  className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white  z-2'>
            <img src={Logo}  className='logo w-32 h-32  ' />
            <ul className='hidden md:flex font-mono'>

                <li className='p-4 hover:text-[#ffde59]'> <a href='/'>Home</a>
                </li>


                <li className='p-4 hover:text-[#ffde59]'> 
                <a href='/services'>Services</a>
                </li>


                <li className='p-4 hover:text-[#ffde59]'> 
               <a href='/process'>Our Process</a>
                </li>
                
                <li className='p-4 hover:text-[#ffde59]'> <a href='about'> About </a>
                </li>

                <li className='p-4 hover:text-[#ffde59]'> <a href='contact'>Contact</a> 

                </li>

            </ul>
            
            <div onClick={handleNav} className='block md:hidden -ml-[40px] -mt-[37px] '>
        {nav ? <AiOutlineClose size={20} className='-ml-[40px] -mt-[25px]'/> : <AiOutlineMenu size={20} className='-ml-[40px]'/>}
        </div>

        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] navhidden dropdown-nav font-mono'}>
        <img src={Logo}  className='logo w-20 h-20' />
        {/* <h1 className='w-full text-3xl font-bold text-[#ffde59] m-4'>Full Circle Design.</h1> */}
        <li className='p-4 hover:text-[#ffde59]'> <a href='/'>Home</a>
                </li>


                <li className='p-4 hover:text-[#ffde59]'> 
                <a href='/services'>Services</a>
                </li>


                <li className='p-4 hover:text-[#ffde59]'> 
               <a href='/process'>Our Process</a>
                </li>
                
                <li className='p-4 hover:text-[#ffde59]'> <a href='about'> About </a>
                </li>

                <li className='p-4 hover:text-[#ffde59]'> <a href='contact'>Contact</a> 

                </li>


        </ul>
        </div>
        );
    
    };
    
    export default Navbar;
    
    
    
    
    
    
    
    
    
    
    // import React, {useState} from 'react'
    // import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
    
    // const Navbar = () => {
    //     const [nav, setNav] = useState(false)
    
    //     const handleNav = () => {
    //         setNav(!nav)
    //     }
    
    //   return (
    //    <div className='text-white flex justify-between items-center h-24 max-width[1240px] mx-auto px-4'> 
    //     <h1 className='w-full text-3xl font-bold text-[#00df9a]'> McIntyre Design </h1>
    
    //     <ul className='hidden md:flex'>
    //         <li className='p-4'> Home </li>
    //         <li className='p-4'> Services</li>
    //         <li className='p-4'> Technologies </li>
    //         <li className='p-4'> Industries </li>
    //         <li className='p-4'> About </li>
    //         <li className='p-4'> Contact </li>
    //     </ul>
    //     <div onClick={handleNav} className="block md:hidden">
    //         {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
    
    //     </div>
    //     <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
    //     <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'> McIntyre Design </h1>
    
    //         <ul className='uppercase  p-4'>
    //             <li className='p-4 border-b border-gray-600'> Home</li>
    //             <li className='p-4 border-b border-gray-600'> Services</li>
    //             <li className='p-4 border-b border-gray-600'> Technologies </li>
    //             <li className='p-4 border-b border-gray-600'> Industries </li>
    //             <li className='p-4 border-b border-gray-600'> About </li>
    //             <li className='p-4'> Contact </li>
    //         </ul>
    //     </div>
    //    </div>
    //   )
    // }
    
    // export default Navbar