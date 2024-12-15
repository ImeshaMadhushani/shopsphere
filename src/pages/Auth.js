import React, { useState } from 'react';

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-8">{isLogin ? 'Login' : 'Register'}</h1>
            <form className="space-y-4">
                {!isLogin && (
                    <div>
                        <label htmlFor="name" className="block mb-1">Name</label>
                        <input type="text" id="name" className="w-full p-2 border rounded" required />
                    </div>
                )}
                <div>
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input type="email" id="email" className="w-full p-2 border rounded" required />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1">Password</label>
                    <input type="password" id="password" className="w-full p-2 border rounded" required />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    {isLogin ? 'Login' : 'Register'}
                </button>
            </form>
            <p className="mt-4 text-center">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button className="text-blue-600" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Register' : 'Login'}
                </button>
            </p>
        </div>
    );
}

