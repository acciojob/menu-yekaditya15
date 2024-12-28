import React, { useState } from "react";
import DishList from "./DishList";
import CategoryFilter from "./CategoryFilter";
import "../styles/App.css";
const App = () => {
  const [category, setCategory] = useState("all");

  return (
    <div className="app">
      <h1>Dish Reviews</h1>
      <CategoryFilter setCategory={setCategory} />
      <DishList category={category} />
    </div>
  );
};

export default App;
