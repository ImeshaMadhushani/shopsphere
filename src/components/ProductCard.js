import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, addToCart }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/product/${product.id}`}>
                <div className="relative aspect-square">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </Link>
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">
                    {product.salePrice ? (
                        <>
                            <span className="line-through mr-2">${product.originalPrice.toFixed(2)}</span>
                            <span className="text-red-500">${product.salePrice.toFixed(2)}</span>
                        </>
                    ) : (
                        `$${product.price.toFixed(2)}`
                    )}
                </p>
                <button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

