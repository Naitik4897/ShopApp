import {useSelector} from "react-redux";
import React from 'react';
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";


const Product = ({post}) => {
    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item Added to Cart");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item Removed from Cart");
    }


    return (
        <div className="flex flex-col items-center justify-between bg-white hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 ease-in gap-3 p-3 sm:p-4 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 h-full">
            {/* Product Image */}
            <div className="h-32 sm:h-40 md:h-48 w-full overflow-hidden rounded-lg">
                <img 
                    src={post.image} 
                    className="h-full w-full object-contain hover:scale-110 transition-transform duration-300" 
                    alt={post.title}
                />
            </div>
            
            {/* Product Title */}
            <div className="w-full">
                <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg text-center line-clamp-2 leading-tight">
                    {post.title}
                </p>
            </div>
            
            {/* Product Description */}
            <div className="w-full">
                <p className="text-gray-500 font-normal text-xs sm:text-sm text-center line-clamp-2 leading-relaxed">
                    {post.description.split(" ").slice(0,12).join(" ") + "..."}
                </p>
            </div>
            
            {/* Price and Button */}
            <div className="w-full mt-auto">
                <div className="flex justify-between items-center mb-3">
                    <p className="text-green-600 font-bold text-base sm:text-lg">${post.price}</p>
                    <div className="flex items-center">
                        <span className="text-yellow-500 text-sm">★</span>
                        <span className="text-gray-600 text-xs ml-1">{post.rating?.rate || 'N/A'}</span>
                    </div>
                </div>
                
                {cart.some((p) => p.id === post.id) ? (
                    <button 
                        className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg text-xs sm:text-sm transition-all duration-300 ease-in hover:bg-red-700 active:scale-95"
                        onClick={removeFromCart}
                    >
                        Remove from Cart
                    </button>
                ) : (
                    <button 
                        className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-lg text-xs sm:text-sm transition-all duration-300 ease-in hover:bg-green-700 active:scale-95"
                        onClick={addToCart}
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    )
}

export default Product;