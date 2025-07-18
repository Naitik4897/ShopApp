import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            console.log(data);
            setPosts(data);
        } catch(error) {
            console.error("Error fetching product data:", error);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-6 sm:py-8 md:py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
                        Welcome to ShopApp
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                        Discover amazing products at unbeatable prices. Shop with confidence!
                    </p>
                </div>
            </div>

            {/* Products Section */}
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
                {loading ? (
                    <div className="flex justify-center items-center py-12">
                        <Spinner />
                    </div>
                ) : posts.length > 0 ? (
                    <>
                        <div className="text-center mb-4 sm:mb-6 md:mb-8">
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                                Featured Products
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600">
                                Explore our collection of {posts.length} amazing products
                            </p>
                        </div>
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                            {posts.map((post) => (
                                <Product key={post.id} post={post}/>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col justify-center items-center py-12 sm:py-16">
                        <div className="text-center px-4">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                                No products found
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600">
                                Please check back later for new products
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;