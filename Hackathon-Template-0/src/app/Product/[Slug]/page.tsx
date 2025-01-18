// "use client";
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
// import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import QuantitySelector from "../../Component/QuantitySelecter";
import RelatedProducts from '@/app/Component/RelatedProducts';


// interface Params {
//     Slug: number;
// }
interface IProduct {
    id: string;
    name: string;
    imagePath: string;
    price: number;
    description: string;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    stockLevel: number;
    category: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function product({ params }: any) {

    const data: IProduct[] = await client.fetch('*[_type == "product"]');
    const index = params.Slug; // Change this to any index you want (e.g., 0, 1, 2, etc.)
    console.log(index);
    // Ensure the index exists in the data array
    const product = data[index];

    if (!product) {
        return <div>Product not found at index {index}</div>;
    }

    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const toggleCart = () => {
    //     setIsCartOpen(!isCartOpen);
    // };

    return (
        <div className="bg-white min-h-screen">

            <div className="py-4 px-32">
                <p className="text-sm text-gray-500 mt-2 flex items-left justify-left space-x-2">
                    <span>Home</span>
                    <FontAwesomeIcon
                        icon={faAngleRight}
                        className="text-gray-900 h-3 w-3 text-xs"
                    />
                    <span>Shop</span>
                    <FontAwesomeIcon
                        icon={faAngleRight}
                        className="text-gray-900 h-3 w-3 text-xs"
                    />
                    <span>{product.name}</span>
                </p>
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Product Images */}
                <div className="flex flex-col items-center">
                    <div className="bg-yellow-50 p-4 rounded-lg w-full">
                        <img
                            src={urlFor(product.imagePath).url()}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="rounded-lg object-cover w-full"
                        />
                    </div>
                    
                </div>

                {/* Product Details */}
                <div className="">
                    <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                    <p className="text-2xl font-semibold text-gray-400 mt-2">
                        Rs. {product.price}
                    </p>

                    <div className="flex items-center mt-4 space-x-1">
                        <div className="flex items-center text-yellow-400">
                            {[...Array(4)].map((_, index) => (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .587l3.668 7.57 8.332 1.151-6.004 5.719 1.492 8.281-7.488-3.951-7.488 3.951 1.492-8.281-6.004-5.719 8.332-1.151z" />
                                </svg>
                            ))}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .587l3.668 7.57 8.332 1.151-6.004 5.719 1.492 8.281-7.488-3.951-7.488 3.951 1.492-8.281-6.004-5.719 8.332-1.151z" />
                            </svg>
                        </div>
                        <span className="text-gray-500 text-sm ml-2">
                            5 Customer Reviews
                        </span>
                    </div>

                    <p className="text-gray-600 mt-6 leading-relaxed">
                        {product.description}
                    </p>

                    {/* Quantity and Add to Cart */}
                    <div className="flex items-center mt-6 space-x-4">
                        <QuantitySelector stockLevel={product.stockLevel} />
                        <button
                            className="px-8 py-4 bg-transparent text-black font-medium border border-black rounded-lg hover:bg-black hover:text-white"
                        >
                            Add To Cart
                        </button>
                    </div>
                    <div className="mt-4 flex border-b border-gray-300 pb-2"></div>

                    {/* Product Metadata */}
                    <div className="mt-16">
                        <p className="text-md text-gray-600">
                            <span className="font-medium ">SKU</span>
                            <span className="font-medium p-10"> :</span>
                            <span className="text-gray-500"> SS{product.id}</span>
                        </p>
                        <p className="text-md text-gray-600 mt-4">
                            <span className="font-medium ">Category</span>
                            <span className="font-medium pr-10 pl-2"> :</span>
                            <span className="text-gray-500"> {product.category}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex border-b border-gray-300 pb-2"></div>
            <div className="bg-white min-h-screen py-6 px-8">
                <div className="bg-white px-6">

                    {/* Section Heading */}
                    <RelatedProducts category={product.category} />
                    <div className="text-center lg:tex-center lg:w-full space-y-6 px-32 pb-28">
                        <a
                            href="/Shop"
                            className="text-lg text-black justify-center relative hover:text-white">
                            View More
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black hover:bg-white transform translate-y-2"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}