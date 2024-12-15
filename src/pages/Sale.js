import React from 'react';
import ProductCard from '../components/ProductCard';

const saleProducts = [
    { id: 1, name: "Smart Watch", price: 79.99, originalPrice: 99.99, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" },
    { id: 2, name: "Wireless Earbuds", price: 59.99, originalPrice: 79.99, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" },
    { id: 3, name: "Portable Charger", price: 19.99, originalPrice: 29.99, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
];

export default function Sale() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Summer Sale</h1>
            <p className="text-xl">Get up to 50% off on selected items. Limited time offer!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {saleProducts.map((product) => (
                    <ProductCard key={product.id} product={{ ...product, salePrice: product.price }} />
                ))}
            </div>
        </div>
    );
}

