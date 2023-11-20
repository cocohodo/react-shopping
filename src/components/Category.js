import React, { useEffect } from "react";
import "./Category.css";

export default function Category({ name, category, onClick }) {
  let categoryPerName = {
    all: "모두",
    electronics: "전자기기",
    jewelery: "쥬얼리",
    "men's clothing": "남성의류",
    "women's clothing": "여성의류",
  };
    return (
        <button className={`category__button category__${name}`} onClick={onClick}>
        {categoryPerName[name]}
        </button>
    );
}