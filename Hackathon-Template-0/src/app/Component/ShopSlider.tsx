import React from 'react';

const ShopSlider = () => {
    return (
        <div className="w-full bg-[#FAF4F4] mt-4 py-[100px] px-4 sm:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
                    <h2 className="font-bold text-lg">Free Delivery</h2>
                    <p className=" opacity-60">For all orders over $50, consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
                    <h2 className="font-bold text-lg">90 Days Return</h2>
                    <p className=" opacity-60">If goods have problems, consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                    <h2 className="font-bold text-lg">Secure Payment</h2>
                    <p className=" opacity-60">100% secure payment, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    );
};

export default ShopSlider;