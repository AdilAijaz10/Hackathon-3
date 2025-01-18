import React from 'react';
import Image from 'next/image';

const BlogSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="mb-8">
            <div className="relative">
              <Image
                src="/images/blog1.jpg" // Replace with actual image path
                alt="Going all-in with millennial design"
                layout="responsive"
                width={768} // Adjust width as needed
                height={432} // Adjust height as needed
                className="rounded-lg"
              />
              {/* Optional: Overlay for title/excerpt */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
                <h3 className="text-lg font-semibold">Going all-in with millennial design</h3>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet...</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="relative">
              <Image
                src="/images/blog2.jpg" // Replace with actual image path
                alt="Exploring new ways of decorating"
                layout="responsive"
                width={768} // Adjust width as needed
                height={432} // Adjust height as needed
                className="rounded-lg"
              />
              {/* Optional: Overlay for title/excerpt */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
                <h3 className="text-lg font-semibold">Exploring new ways of decorating</h3>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet...</p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <Image
                src="/images/blog3.jpg" // Replace with actual image path
                alt="Handmade pieces that took time to make"
                layout="responsive"
                width={768} // Adjust width as needed
                height={432} // Adjust height as needed
                className="rounded-lg"
              />
              {/* Optional: Overlay for title/excerpt */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
                <h3 className="text-lg font-semibold">Handmade pieces that took time to make</h3>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet...</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">1</button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded ml-2">2</button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded ml-2">3</button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded ml-2">Next</button>
          </div>
        </div>

        <div className="lg:sticky lg:top-16">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Design</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Lifestyle</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Travel</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Food</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Tech</a></li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">Recent Posts</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center">
                <img src="/images/thumb1.jpg" alt="Thumb 1" className="w-10 h-10 rounded-full mr-2" />
                <span>Going all-in with millennial design</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center">
                <img src="/images/thumb2.jpg" alt="Thumb 2" className="w-10 h-10 rounded-full mr-2" />
                <span>Exploring new ways of decorating</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center">
                <img src="/images/thumb3.jpg" alt="Thumb 3" className="w-10 h-10 rounded-full mr-2" />
                <span>Handmade pieces that took time to make</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;