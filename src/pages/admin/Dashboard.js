import React from 'react';

const quickStats = [
    { name: 'Total Sales', value: '$24,345', change: '+4.75%', trend: 'up' },
    { name: 'Total Orders', value: '1,345', change: '+11.5%', trend: 'up' },
    { name: 'New Customers', value: '345', change: '-2.7%', trend: 'down' },
    { name: 'Conversion Rate', value: '3.15%', change: '+1.2%', trend: 'up' },
];

const recentOrders = [
    { id: '1234', customer: 'John Doe', total: '$120.50', status: 'Completed' },
    { id: '1235', customer: 'Jane Smith', total: '$75.00', status: 'Processing' },
    { id: '1236', customer: 'Bob Johnson', total: '$200.75', status: 'Shipped' },
    { id: '1237', customer: 'Alice Brown', total: '$54.25', status: 'Pending' },
    { id: '1238', customer: 'Charlie Davis', total: '$99.99', status: 'Completed' },
];

const Dashboard = () => {
    return (
        <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickStats.map((stat) => (
                    <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg className={`w-6 h-6 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.trend === 'up' ? 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' : 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6'} />
                                    </svg>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                                            <div className={`ml-2 flex items-baseline text-sm font-semibold ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                                {stat.change}
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Orders and Top Products */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Orders */}
                <div className="bg-white shadow rounded-lg">
                    <div className="p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Orders</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {recentOrders.map((order) => (
                                        <tr key={order.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.total}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                                                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                                                'bg-red-100 text-red-800'
                                                    }`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Top Products Chart */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Top Products</h3>
                    <div className="h-64 flex items-end">
                        <div className="w-1/5 h-full bg-blue-500 rounded-t"></div>
                        <div className="w-1/5 h-3/4 bg-blue-400 rounded-t"></div>
                        <div className="w-1/5 h-1/2 bg-blue-300 rounded-t"></div>
                        <div className="w-1/5 h-1/3 bg-blue-200 rounded-t"></div>
                        <div className="w-1/5 h-1/4 bg-blue-100 rounded-t"></div>
                    </div>
                    <div className="flex justify-between mt-4 text-sm text-gray-600">
                        <span>Product A</span>
                        <span>Product B</span>
                        <span>Product C</span>
                        <span>Product D</span>
                        <span>Product E</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

