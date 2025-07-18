import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import CartItem from "../components/Cartitem";

const Cart = () => {
    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount( cart.reduce((acc, curr) =>  acc+ curr.price,0) );
    }, [cart]);

    return (
        <div className="min-h-screen bg-gray-50">
            {cart.length > 0 ? (
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
                    {/* Header */}
                    <div className="text-center mb-6 sm:mb-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                            Shopping Cart
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600">
                            {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
                        </p>
                    </div>

                    {/* Cart Content */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        {/* Cart Items */}
                        <div className="lg:w-2/3">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                                <div className="space-y-4 sm:space-y-6">
                                    {cart.map((item, index) => (
                                        <CartItem key={item.id} item={item} itemIndex={index} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Cart Summary */}
                        <div className="lg:w-1/3">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 sticky top-24">
                                <div className="space-y-4 sm:space-y-6">
                                    <div>
                                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                                            Order Summary
                                        </h2>
                                        <div className="border-t border-gray-200 pt-4">
                                            <div className="flex justify-between text-sm sm:text-base text-gray-600 mb-2">
                                                <span>Total Items:</span>
                                                <span className="font-medium">{cart.length}</span>
                                            </div>
                                            <div className="flex justify-between text-sm sm:text-base text-gray-600 mb-2">
                                                <span>Subtotal:</span>
                                                <span className="font-medium">${totalAmount.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-sm sm:text-base text-gray-600 mb-2">
                                                <span>Shipping:</span>
                                                <span className="font-medium text-green-600">Free</span>
                                            </div>
                                            <div className="border-t border-gray-200 pt-2 mt-4">
                                                <div className="flex justify-between text-base sm:text-lg font-semibold text-gray-800">
                                                    <span>Total:</span>
                                                    <span>${totalAmount.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-4 rounded-lg transition-colors duration-300 text-sm sm:text-base">
                                        Proceed to Checkout
                                    </button>
                                    
                                    <Link to={"/"} className="block">
                                        <button className="w-full bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 sm:py-3 px-4 rounded-lg transition-colors duration-300 text-sm sm:text-base">
                                            Continue Shopping
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="min-h-[80vh] flex flex-col justify-center items-center px-4">
                    <div className="text-center">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <svg className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                            Your Cart is Empty
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto">
                            Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
                        </p>
                        <Link to={"/"}>
                            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-300 text-sm sm:text-base">
                                Start Shopping
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart;