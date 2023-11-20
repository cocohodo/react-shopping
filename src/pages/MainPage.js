import React, { useEffect, useState } from "react";
import requests from "../api/requests.js";
import "./MainPage.css";
import Category from "../components/Category.js";
import Product from "../components/Product.js";

export default function MainPage() {
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const [category, setCategory] = useState("all");
  const [categoryURL, setCategoryURL] = useState(`${requests.fetchProducts}`);

  useEffect(() => {}, [category]);

  // 카테고리 조작
    const handleCategory = (value) => {
    setCategory(category);
    if (value === "all") setCategoryURL(requests.fetchProducts);
    else setCategoryURL(`${requests.fetchProductsByCategory}/${value}`);
  };

  return (
    <div className="main">
        <h1>Products</h1>
      <div className="category">
        {categories.map((value) => (
          <Category
            key={value}
            name={value}
            category={category}
            onClick={() => handleCategory(value)}
          ></Category>
        ))}
      </div>

      <Product fetchURL={categoryURL} />
    </div>
  );
}