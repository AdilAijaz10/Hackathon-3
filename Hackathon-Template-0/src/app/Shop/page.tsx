import React from 'react';
//import Link from 'next/link';
import Image from 'next/image';
//import { FaRegUser } from "react-icons/fa6";
//import { CiSearch } from "react-icons/ci";
//import { CiHeart } from "react-icons/ci";
//import { IoCartOutline } from "react-icons/io5";
import ShopTop from '../Component/ShopTop';
import ShopSlider from '../Component/ShopSlider';

const ShopPage = () => {
  return (
    <div>
      <div className=" relative w-full h-[350px]">
        <Image
          src="/Rectangle 1.png"
          alt="insta"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black p-10">
          <h1 className="text-3xl md:text-5xl font-bold">Shop</h1>
          <p className="opacity-[0.8] max-w-xl text-lg md:text-xl mt-2 font-semibold">
            Home - Shop
          </p>
        </div>
      </div>
      <ShopTop />
      <ShopSlider />
    </div>
  );
}

export default ShopPage;