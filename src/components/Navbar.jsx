import {FaShoppingCart} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React from 'react';
import { useSelector } from "react-redux";

const Navbar = () => {
    const cart = useSelector((state) => state.cart);
    return (
        <div>
            <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
                <NavLink to={"/"}>
                <div className="ml-6">
                    <img src="/logo.png" className="h-14" alt="Shop Logo"/>
                </div>
                </NavLink>
                <div className="flex flex-row items-center gap-x-6 mr-6 text-slate-100 -tracking-tighter font-medium">
                    <NavLink to={"/"}>
                    <p className="hover:text-green-400 cursor-pointer duration-300 transition-all ease-in">Home</p>
                    </NavLink>
                    <NavLink to={"/cart"}>
                    <div className="relative">
                        <FaShoppingCart className="text-2xl"/>
                        {
                            cart.length > 0 &&
                            <span 
                            className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex
                            justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
                        }
                        
                    </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;