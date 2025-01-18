import Hero from "./Component/Hero";
import TopSection from "./Component/TopSection";
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import NavBar from "./Component/Nav1";
export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero />
      <section className="bg-[#FAF4F4] py-10">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <Image
                src="/Granite square side table 1.png"
                width={1200}
                height={1200}
                alt=""
                className="w-1/2 h-auto mx-auto"
              />            <h3 className="text-xl font-bold mt-4">Side Table</h3>
              <button className="underline  hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded mt-4">View More</button>
            </div>

            <div className="text-center">

              <Image
                src="/Cloud sofa three seater + ottoman_3 1.png"
                width={1200}
                height={1200}
                alt=""
                className="w-1/2 h-auto mx-auto"
              />
              <h3 className="text-xl font-bold mt-4">Side Table</h3>
              <button className="underline hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded mt-4">View More</button>
            </div>
          </div>
        </div>
      </section>
      {/**/}
      <TopSection />
      <section className="bg-[#FFF9E5] py-10">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/Asgaard sofa 1.png"
                width={1200}
                height={1200}
                alt="Asgaard Sofa"
                className="w-full h-auto mb-4"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="  mb-4 sm:text-4xl md:text-5xl">New Arrivals</p>
              <h1 className="text-5xl font-bold mb-6 sm:text-6xl md:text-7xl lg:text-8xl">Asgaard sofa</h1>
              <button className="border-2 border-black text-black py-2 px-4  hover:bg-gray-800">Order Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container mx-auto px-4 md:px-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Blogs</h2>
          <p className="text-gray-500 text-center mb-10">Find a bright idea to suit your taste with our great selection</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg">
              <Image
                src="/Rectangle 13.png"
                alt="Blog Image 1"
                width={400}
                height={400}
                className="w-full h-auto mb-4"
              />
              <p className="text-lg  mb-2 text-center">Going all-in with millennial design</p>
              <a href="#" className="items-center justify-center font-bold text-black-500 underline">
                <p className="text-center">Read More</p>
              </a>        <p className="text-center text-gray-500 mt-2">
                <Calendar size={16} className="inline-block mr-2" />
                5 min
                <Clock size={16} className="inline-block mr-2" />
                12th Oct 2022
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <Image
                src="/Rectangle 14.png"
                alt="Blog Image 1"
                width={400}
                height={400}
                className="w-full h-auto mb-4"
              />
              <p className="text-lg  mb-2 text-center">Going all-in with millennial design</p>
              <a href="#" className="items-center justify-center font-bold text-black-500 underline">
                <p className="text-center">Read More</p>
              </a>        <p className="text-center text-gray-500 mt-2">
                <Calendar size={16} className="inline-block mr-2" />
                5 min
                <Clock size={16} className="inline-block mr-2" />
                12th Oct 2022
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <Image
                src="/Rectangle 15.png"
                alt="Blog Image 1"
                width={400}
                height={400}
                className="w-full h-auto mb-4"
              />
              <p className="text-lg  mb-2 text-center">Going all-in with millennial design</p>
              <a href="#" className="items-center justify-center font-bold text-black-500 underline">
                <p className="text-center">Read More</p>
              </a>        <p className="text-center text-gray-500 mt-2">
                <Calendar size={16} className="inline-block mr-2" />
                5 min
                <Clock size={16} className="inline-block mr-2" />
                12th Oct 2022
              </p>
            </div>
            {/* Repeat the above structure for the other two blog posts */}

          </div>
          <div className="text-center mt-10">
            <a href="#" className="items-center justify-center text-black-500 underline">
              <p className="text-center">View All</p>
            </a>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[450px]">
        {/* Background Image */}
        <Image
          src="/Group 43.png"
          alt="insta"
          layout="fill" // Fills the parent container
          objectFit="cover" // Ensures the image covers the container
          className="object-cover"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000]px-4">
          <h1 className="text-[24px] md:text-[36px] font-bold">Our Instagram</h1>
          <p className="opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2">
            Follow our store on Instagram
          </p>
          <button className="mt-7 px-[50px] py-[20px] rounded-full shadow-2xl bg-[#FAFAFA]  text-black font-semibold">
            Follow Us
          </button>
        </div>
      </section>
    </>
  );
}
