import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold">
                        SHOPSPHERE
                    </Link>
        
                    <div className="hidden md:block flex-1 max-w-2xl mx-8">
                        <div className="relative">
                            <input
                                type="search"
                                placeholder="Search"
                                className="w-full bg-white text-black pl-4 pr-10 py-2 rounded"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/auth" className="hover:text-gray-200">
                            SignIn/ Register
                        </Link>
                        <Link to="/cart" className="hover:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </Link>
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <nav className="px-2 pt-2 pb-4 space-y-1">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">Home</Link>
                       {/*  <Link to="/categories" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">Categories</Link> */}
                        <Link to="/auth" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">SignIn / Register</Link>
                        <Link to="/cart" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">Cart</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

