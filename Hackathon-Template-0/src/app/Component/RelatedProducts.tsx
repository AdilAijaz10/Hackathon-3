"use client";
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import React, { useState, useEffect } from "react";

interface IProduct {
    id: string;
    name: string;
    imagePath: string;
    price: number;
    category: string;
}

const RelatedProducts = ({ category }: { category: string }) => {
    const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchRelatedProducts = async () => {
            try {
                const query = `*[_type == "product" && category == "${category}" ]`;
                const data = await client.fetch(query);
                setRelatedProducts(data);
            } catch (error) {
                console.error("Error fetching related products:", error);
            }
        };

        fetchRelatedProducts();
    }, [category]);

    return (
        <div className="bg-white px-6">
            {/* Section Heading */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold text-gray-800">Related Products</h2>
            </div>

            {/* Product Section */}
            <div className="flex justify-center gap-8 flex-wrap">
                {relatedProducts.map((product) => (
                    <div key={product.id} className="text-center p-6 rounded-lg w-64 mb-6">
                        <img
                            src={urlFor(product.imagePath).url()}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="mx-auto h-64"
                        />
                        <p className="mt-2 text-gray-600">{product.name}</p>
                        <p className="mt-2 text-lg text-gray-500">Rs. {product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;