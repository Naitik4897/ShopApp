import {FaShoppingCart, FaBars, FaTimes} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { useSelector } from "react-redux";

const Navbar = () => {
    const cart = useSelector((state) => state.cart);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-slate-900 sticky top-0 z-50 shadow-lg">
            <nav className="flex justify-between items-center h-14 sm:h-16 md:h-20 max-w-6xl mx-auto px-4 sm:px-6">
                {/* Logo */}
                <NavLink to={"/"} className="flex items-center" onClick={() => setIsOpen(false)}>
                    <div className="flex items-center space-x-2">
                        <img src="/logo.png" className="h-8 sm:h-10 md:h-12 w-auto" alt="Shop Logo"/>
                    </div>
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-row items-center gap-x-6 text-slate-100 font-medium">
                    <NavLink 
                        to={"/"} 
                        className="hover:text-green-400 cursor-pointer duration-300 transition-all ease-in py-2 px-3 rounded"
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to={"/cart"} 
                        className="hover:text-green-400 cursor-pointer duration-300 transition-all ease-in"
                    >
                        <div className="relative">
                            <FaShoppingCart className="text-2xl"/>
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                                    {cart.length}
                                </span>
                            )}
                        </div>
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-3">
                    <NavLink 
                        to={"/cart"} 
                        className="text-slate-100 hover:text-green-400 transition-colors"
                    >
                        <div className="relative">
                            <FaShoppingCart className="text-lg sm:text-xl"/>
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-green-600 text-xs w-4 h-4 flex justify-center items-center rounded-full text-white text-[10px]">
                                    {cart.length}
                                </span>
                            )}
                        </div>
                    </NavLink>
                    <button 
                        onClick={toggleMenu}
                        className="text-slate-100 hover:text-green-400 transition-colors p-1"
                    >
                        {isOpen ? <FaTimes className="text-lg sm:text-xl"/> : <FaBars className="text-lg sm:text-xl"/>}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-800 border-t border-slate-700">
                    <div className="px-4 py-2 space-y-1">
                        <NavLink 
                            to={"/"} 
                            onClick={toggleMenu}
                            className="block px-3 py-2 text-slate-100 hover:text-green-400 hover:bg-slate-700 rounded transition-colors"
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to={"/cart"} 
                            onClick={toggleMenu}
                            className="block px-3 py-2 text-slate-100 hover:text-green-400 hover:bg-slate-700 rounded transition-colors"
                        >
                            Cart ({cart.length} items)
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;