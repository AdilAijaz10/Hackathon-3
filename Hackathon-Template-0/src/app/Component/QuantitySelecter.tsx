"use client";
import React, { useState } from 'react';

const QuantitySelector = ({ stockLevel }: { stockLevel: number }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        if (quantity < stockLevel) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex items-center border text-black rounded-lg overflow-hidden">
            <button
                className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                onClick={handleDecrement}
                disabled={quantity === 1}
            >
                -
            </button>
            <input
                type="text"
                value={quantity.toString()}
                readOnly
                className="w-12 text-center focus:outline-none"
            />
            <button
                className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                onClick={handleIncrement}
                disabled={quantity >= stockLevel}
            >
                +
            </button>
        </div>
    );
};

export default QuantitySelector;