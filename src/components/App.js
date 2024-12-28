import React, { useState } from "react";
import data from "../data";

function App() {
  const [items, setItems] = useState(data);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(data);
    } else {
      setItems(data.filter((item) => item.category === category));
    }
  };

  return (
    <main id="main">
      <header>
        <h1>Dish Reviews</h1>
        <div>
          <button id="filter-btn-all" onClick={() => filterItems("all")}>
            All
          </button>
          <button id="filter-btn-1" onClick={() => filterItems("breakfast")}>
            Breakfast
          </button>
          <button id="filter-btn-2" onClick={() => filterItems("lunch")}>
            Lunch
          </button>
          <button id="filter-btn-3" onClick={() => filterItems("shakes")}>
            Shakes
          </button>
        </div>
      </header>
      <section>
        {items.map((item) => (
          <article key={item.id} data-test-id={`menu-item-${item.category}`}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>${item.price}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
