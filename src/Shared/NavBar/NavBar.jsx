import React from 'react';
import { HiMenu } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
// import { Link, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const NavBar = () => {
    const text = <div className='text-white flex'>
       <li> <NavLink to="/" activeClassName="active">Home</NavLink></li>
       <li> <NavLink to="/about" activeClassName="active">About</NavLink></li>
       <li><NavLink to="/skills">Skills</NavLink></li>
       <li><NavLink to="/project">Projects</NavLink></li>
       <li><NavLink to="/contact">Contact</NavLink></li>
    </div>
    return (
        <div className="navbar bg-orange-400 py-2">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case lg:hidden text-xl">Mehedi</a>
            </div>
            <div className="flex-none lg:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost">
                        <HiMenu className='text-2xl' />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {text}
                    </ul>
                </div>
            </div>
            {/* -------------small device----------- */}
            <div className='navbar hidden lg:grid grid-cols-1'>
                <div><a className="normal-case text-2xl font-bold ml-4">Me<span className='text-gray-300'>he</span>di</a></div>
                <div className='text-xs ml-6 font-bold'>Protfolio</div>
            </div>
            <div className="navbar hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {text}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;