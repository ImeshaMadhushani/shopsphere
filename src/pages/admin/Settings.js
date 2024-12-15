import React from 'react';

const Settings = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Settings</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
                <form className="space-y-6">
                    {/* General Settings */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">General Settings</h3>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">Store Name</label>
                                <input type="text" name="storeName" id="storeName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="storeUrl" className="block text-sm font-medium text-gray-700">Store URL</label>
                                <input type="text" name="storeUrl" id="storeUrl" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
                                <select id="currency" name="currency" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>GBP</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">Timezone</label>
                                <select id="timezone" name="timezone" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                    <option>UTC</option>
                                    <option>EST</option>
                                    <option>PST</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Email Settings */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Email Settings</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label htmlFor="fromEmail" className="block text-sm font-medium text-gray-700">From Email</label>
                                <input type="email" name="fromEmail" id="fromEmail" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="smtpHost" className="block text-sm font-medium text-gray-700">SMTP Host</label>
                                <input type="text" name="smtpHost" id="smtpHost" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Payment Settings */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Payment Settings</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="paypal" name="paypal" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="paypal" className="font-medium text-gray-700">PayPal</label>
                                    <p className="text-gray-500">Enable PayPal payments</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="stripe" name="stripe" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="stripe" className="font-medium text-gray-700">Stripe</label>
                                    <p className="text-gray-500">Enable Stripe payments</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Save Settings
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Settings;

