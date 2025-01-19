"use client";
import Image from "next/image";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';

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
import { client } from '@/sanity/lib/client';

const ShopPage: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data: IProduct[] = await client.fetch('*[_type == "product"]');
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-16 text-center">
            {/* Small Logo */}
            <div className="w-16 h-16 mx-auto mb-4">
              <Image
                src="/images/minilogo.png"
                alt="Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Shop Heading */}
            <h1 className="text-4xl font-bold text-gray-900">Shop</h1>

            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mt-2 flex items-center justify-center space-x-2">
              <span>
                <Link href="/">Home</Link>
              </span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-gray-900 h-3 w-3 text-xs"
              />
              <span>Shop</span>
            </p>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroShop.png"
            alt="Background"
            className="pointer-events-none opacity-30"
          />
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <div
              key={product.id}
              className="relative group text-center p-6"
            >
              {/* Product Image */}
              <img
                src={product.imagePath}
                alt={product.description}
                width={300}
                height={300}
                className="mx-auto h-64 object-contain transition-transform duration-200 group-hover:scale-105"
              />

              {/* Product Details */}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {product.description}
              </h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <p className="mt-2 text-lg text-gray-500">{product.price}</p>

              {/* Add to Cart Button */}
              <Link href={"/SingleProductPage"} >
              <button className="absolute inset-x-0 bottom-4 mx-auto w-10/12 bg-black text-white text-sm font-medium py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to Cart
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center space-x-4 py-6">
        {/* Page Numbers */}
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-md bg-[#FBEBB5] text-black hover:bg-[#FFF9E5]">
            1
          </button>
          <button className="px-4 py-2 rounded-md bg-[#FFF9E5] text-gray-900 hover:bg-gray-300">
            2
          </button>
          <button className="px-4 py-2 rounded-md bg-[#FFF9E5] text-gray-900 hover:bg-gray-300">
            3
          </button>
        </div>

        <button className="px-4 py-2 bg-[#FFF9E5] text-black rounded-md hover:bg-gray-700">
          Next
        </button>
      </div>

      {/* Additional Info Section */}
      <div className="bg-[#FAF4F4] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="flex flex-col items-left">
              <div className="text-2xl font-bold text-gray-800">
                Free Delivery
              </div>
              <p className="mt-2 text-gray-600">
                For all orders over $50, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-col items-left">
              <div className="text-2xl font-bold text-gray-800">
                90 Days Return
              </div>
              <p className="mt-2 text-gray-600">
                If goods have problems, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-col items-left">
              <div className="text-2xl font-bold text-gray-800">
                Secure Payment
              </div>
              <p className="mt-2 text-gray-600">
                100% secure payment, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;