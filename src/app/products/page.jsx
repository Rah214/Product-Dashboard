"use client";

import React, { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105
        transition-transform   duration-300 ease-in-out"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[200px] object-contain mb-4 rounded-md"
            />
            <h2
              className="text-lg font-bold mb-2 truncate"
              title={product.title}
            >
              {product.title}
            </h2>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.description}
            </p>
            <p className="text-lg font-semibold mb-4">${product.price}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full transition-colors duration-200">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
