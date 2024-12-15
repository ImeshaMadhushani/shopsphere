import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useCart } from '../contexts/CartContext';

const products = [
    { id: 1, name: "Smart Watch", price: 99.99, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" },
    { id: 2, name: "Wireless Earbuds", price: 79.99, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" },
    { id: 3, name: "Portable Charger", price: 29.99, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
];

export default function Home() {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const handleCategoryClick = (category) => {
        navigate(`/category/${category.toLowerCase()}`);
    };

    return (
        <div className="space-y-12">
            {/* Seasonal Offers */}
            <section className="relative bg-blue-600 text-white p-8 rounded-lg overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-4">Summer Sale!</h2>
                    <p className="text-xl mb-6">Get up to 50% off on selected items. Limited time offer!</p>
                    <button className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-blue-100">
                        <Link to="/sale">Shop Now</Link>
                    </button>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1494&q=80"
                    alt="Summer Sale"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
            </section>

            {/* Flash Sale */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Flash Sale</h2>
                    <Link to="/all-products" className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                        View All Products
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </section>

            {/* Categories */}
            <section>
                <h2 className="text-2xl font-bold mb-6">Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                        { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
                        { name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" },
                        { name: "Home & Garden", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" },
                        { name: "Sports", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
                    ].map((category, index) => (
                        <div
                            key={index}
                            className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                            onClick={() => handleCategoryClick(category.name)}
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-600 bg-opacity-60 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                {category.name}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* For You */}
            <section>
                <h2 className="text-2xl font-bold mb-6">For You</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </section>
        </div>
    );
}

