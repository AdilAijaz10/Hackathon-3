"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
// import { PiCirclesFourDuotone } from "react-icons/pi";
// import { BsViewList, BsFillGridFill } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import Link from "next/link";

interface IProduct {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  category: string;
}

const ShopTop = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16); // Adjust as needed
  const [showCount, setShowCount] = useState(productsPerPage);
  const [sortOption, setSortOption] = useState("default");
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProducts: IProduct[] = await client.fetch("*[_type == 'product']");
        setProducts(allProducts);
        setFilteredProducts(allProducts);
        const allCategories = [...new Set(allProducts.map((item: IProduct) => item.category))];
        setCategories(allCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  // Calculate start and end indices for current page
  const indexOfLastProduct = currentPage * showCount;
  const indexOfFirstProduct = indexOfLastProduct - showCount;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle filter changes (implement logic based on your filter criteria)
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(filterValue)
    );
    setFilteredProducts(filteredProducts);
  };

  // Function to handle 'Show' changes
  const handleShowChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newShowCount = parseInt(event.target.value);
    if (!isNaN(newShowCount) && newShowCount > 0) {
      setShowCount(newShowCount);
      setCurrentPage(1);
    }
  };

  // Function to handle 'Sort by' changes
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
    let sortedProducts: IProduct[] = [...filteredProducts];

    switch (sortOption) {
      case "price-asc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "name-asc":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "name-desc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        sortedProducts = filteredProducts;
    }

    setFilteredProducts(sortedProducts);
  };

  // Function to handle category selection
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCat = event.target.value;
    setSelectedCategory(selectedCat);
    if (selectedCat === "all") {
      setFilteredProducts(products);
    } else {
      const filteredByCategory = products.filter((product) => product.category === selectedCat);
      setFilteredProducts(filteredByCategory);
    }
  };

  return (
    <>
      <div className="overflow-hidden w-full bg-[#FAF4F4] py-4 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <LuSettings2 className="h-5 w-5 text-black-500 mr-2" />
            <p className="font-semibold text-black-700">Filter:</p>
            <input
              type="text"
              className="border border-black-300 px-2 py-1 ml-2 w-full sm:w-60 md:w-80 lg:w-96"
              placeholder="Search products..."
              onChange={handleFilterChange}
            />
          </div>
          <div className="flex items-center">
            <p className="font-semibold text-black-700 mr-2">Show:</p>
            <input
              type="text"
              className="border border-black-300 px-2 py-1 ml-2 w-10 text-center"
              defaultValue={showCount.toString()}
              onChange={handleShowChange}
            />
            <p className="ml-2 font-semibold text-black-700 mr-2">Sort by:</p>
            <select className="border border-gray-300 px-2 py-1 ml-2" onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A-Z</option>
              <option value="name-desc">Name: Z-A</option>
              {/* Add more sort options as needed */}
            </select>
            <p className="ml-2 font-semibold text-black-700 mr-2">Category:</p>
            <select
              className="border border-gray-300 px-2 py-1 ml-2"
              onChange={handleCategoryChange}
            >
              <option value="all">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:my-[40px] lg:grid-cols-4 gap-6 px-16 pb-[80px]">
        {currentProducts.map((product) => (
          <div
            key={product.id || `${product.name}`} // Prioritize _id, fallback to name
            className="flex flex-col items-center justify-end p-4"
          >
            <Link href={`/Product/${product.id}`}>
              <img
                src={urlFor(product.imagePath).url()}
                alt={product.name}
                width={150}
                height={150}
                className="object-cover rounded-lg"
              />
            </Link>
            <div className="text-center">
              <p className="mt-4 text-sm text-gray-600 font-semibold">{product.name}</p>
              <h2 className="text-lg font-bold text-gray-800">Rs. {product.price}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center gap-8 mt-6">
        {Array.from({ length: Math.ceil(filteredProducts.length / showCount) }).map(
          (_, index) => (
            <button
              key={index + 1}
              className={`w-[40px] h-[40px] rounded-md ${
                currentPage === index + 1
                  ? "bg-[#FBEBB5]"
                  : "bg-[#FFF9E5]"
              } text-center pt-[10px]`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </>
  );
};
export default ShopTop;