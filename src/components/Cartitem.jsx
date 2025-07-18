import {FcDeleteDatabase} from "react-icons/fc";
import { remove } from "../redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Cartitem = ({item, itemIndex}) => {
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed from Cart");
    }
    
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-5 border-b border-gray-200 last:border-b-0 gap-4 sm:gap-5">
            {/* Product Image */}
            <div className="w-full sm:w-24 md:w-28 lg:w-32 h-32 sm:h-24 md:h-28 lg:h-32 flex-shrink-0">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain rounded-lg bg-gray-50" 
                />
            </div>
            
            {/* Product Details */}
            <div className="flex-1 min-w-0">
                <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 line-clamp-2 leading-tight">
                        {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 line-clamp-3 leading-relaxed">
                        {item.description}
                    </p>
                    
                    {/* Price and Actions */}
                    <div className="flex items-center justify-between pt-2 sm:pt-3">
                        <div className="flex items-center space-x-2">
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">
                                ${item.price}
                            </span>
                            {item.rating && (
                                <div className="flex items-center text-sm text-gray-500">
                                    <span className="text-yellow-500">★</span>
                                    <span className="ml-1">{item.rating.rate}</span>
                                </div>
                            )}
                        </div>
                        
                        <button 
                            onClick={removeFromCart}
                            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-red-100 hover:bg-red-200 rounded-full transition-colors duration-200 group"
                            aria-label="Remove item from cart"
                        >
                            <FcDeleteDatabase className="text-base sm:text-lg group-hover:scale-110 transition-transform duration-200" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cartitem;