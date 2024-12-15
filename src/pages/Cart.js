import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialCartItems = [
    { id: 1, name: "Smart Watch", price: 99.99, quantity: 1, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" },
    { id: 2, name: "Wireless Earbuds", price: 79.99, quantity: 2, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" },
    { id: 3, name: "Portable Charger", price: 29.99, quantity: 1, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
];

export default function Cart() {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const updateQuantity = (id, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 10; // Fixed shipping cost
    const total = subtotal + shipping;

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 bg-white p-4 rounded-lg">
                            <div className="relative w-24 h-24">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold">{item.name}</h3>
                                <div className="text-gray-600">${item.price.toFixed(2)}</div>
                                <div className="flex items-center mt-2">
                                    <button
                                        className="border rounded p-1"
                                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        </svg>
                                    </button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button
                                        className="border rounded p-1"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <button
                                className="self-start"
                                onClick={() => removeItem(item.id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg space-y-4">
                        <h2 className="font-semibold text-lg">Order Summary</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-bold">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <Link
                            to="/proceed-order"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded inline-block text-center"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>

                    {/* Payment Form */}
                    {/* <div className="bg-blue-600 text-white p-6 rounded-lg space-y-4">
                        <h3 className="font-semibold">Payment Details</h3>
                        <div className="space-y-2">
                            <input
                                type="text"
                                placeholder="Card Holder Name"
                                className="w-full p-2 rounded text-black"
                            />
                            <input
                                type="text"
                                placeholder="Card Number"
                                className="w-full p-2 rounded text-black"
                            />
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    className="w-1/2 p-2 rounded text-black"
                                />
                                <input
                                    type="text"
                                    placeholder="CVV"
                                    className="w-1/2 p-2 rounded text-black"
                                />
                            </div>
                        </div>
                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
                            Pay ${total.toFixed(2)}
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

