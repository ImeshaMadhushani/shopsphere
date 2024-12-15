import React from 'react';

const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', orders: 5, totalSpent: 450.75 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', orders: 3, totalSpent: 275.50 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', orders: 7, totalSpent: 780.25 },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', orders: 2, totalSpent: 150.00 },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', orders: 4, totalSpent: 320.50 },
];

const Customers = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Customers</h2>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spent</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {customers.map((customer) => (
                            <tr key={customer.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.orders}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${customer.totalSpent.toFixed(2)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">View</button>
                                    <button className="text-red-600 hover:text-red-900">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Customers;

