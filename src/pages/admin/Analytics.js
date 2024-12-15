import React from 'react';

const Analytics = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sales Overview */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
                    <div className="h-64 bg-gray-200 rounded flex items-end">
                        <div className="w-1/4 h-1/2 bg-blue-500"></div>
                        <div className="w-1/4 h-3/4 bg-blue-600"></div>
                        <div className="w-1/4 h-1/3 bg-blue-700"></div>
                        <div className="w-1/4 h-2/3 bg-blue-800"></div>
                    </div>
                    <div className="flex justify-between mt-4 text-sm text-gray-600">
                        <span>Q1</span>
                        <span>Q2</span>
                        <span>Q3</span>
                        <span>Q4</span>
                    </div>
                </div>

                {/* Top Selling Products */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Top Selling Products</h3>
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                            <span>Smart Watch</span>
                            <span className="text-green-600 font-semibold">1,245 units</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Wireless Earbuds</span>
                            <span className="text-green-600 font-semibold">980 units</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Leather Jacket</span>
                            <span className="text-green-600 font-semibold">879 units</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Running Shoes</span>
                            <span className="text-green-600 font-semibold">756 units</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Coffee Maker</span>
                            <span className="text-green-600 font-semibold">654 units</span>
                        </li>
                    </ul>
                </div>

                {/* Customer Demographics */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Customer Demographics</h3>
                    <div className="h-64 bg-gray-200 rounded-full flex items-center justify-center">
                        <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                            Pie Chart
                        </div>
                    </div>
                </div>

                {/* Traffic Sources */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                            <span>Organic Search</span>
                            <span className="text-blue-600 font-semibold">45%</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Direct</span>
                            <span className="text-blue-600 font-semibold">30%</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Social Media</span>
                            <span className="text-blue-600 font-semibold">15%</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Referral</span>
                            <span className="text-blue-600 font-semibold">10%</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Analytics;

