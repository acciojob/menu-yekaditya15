import React from "react";

const categories = ["all", "breakfast", "lunch", "shakes"];

const CategoryFilter = ({ setCategory }) => {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button key={cat} onClick={() => setCategory(cat)}>
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
