import React from 'react';

export default function ProceedOrder() {
    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold">Complete Your Order</h1>

            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block mb-1">First Name</label>
                            <input type="text" id="firstName" className="w-full p-2 border rounded" required />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-1">Last Name</label>
                            <input type="text" id="lastName" className="w-full p-2 border rounded" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="address" className="block mb-1">Address</label>
                        <input type="text" id="address" className="w-full p-2 border rounded" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="city" className="block mb-1">City</label>
                            <input type="text" id="city" className="w-full p-2 border rounded" required />
                        </div>
                        <div>
                            <label htmlFor="zipCode" className="block mb-1">ZIP Code</label>
                            <input type="text" id="zipCode" className="w-full p-2 border rounded" required />
                        </div>
                    </div>
                </form>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="cardNumber" className="block mb-1">Card Number</label>
                        <input type="text" id="cardNumber" className="w-full p-2 border rounded" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="expiryDate" className="block mb-1">Expiry Date</label>
                            <input type="text" id="expiryDate" placeholder="MM/YY" className="w-full p-2 border rounded" required />
                        </div>
                        <div>
                            <label htmlFor="cvv" className="block mb-1">CVV</label>
                            <input type="text" id="cvv" className="w-full p-2 border rounded" required />
                        </div>
                    </div>
                </form>
            </div>

            <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">
                Place Order
            </button>
        </div>
    );
}

