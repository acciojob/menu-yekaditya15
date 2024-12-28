import React from "react";

const DishCard = ({ dish }) => {
  return (
    <div className="dish-card">
      <img src={dish.img} alt={dish.title} />
      <h3>{dish.title}</h3>
      <p>{dish.desc}</p>
      <p>
        <strong>Price: ${dish.price}</strong>
      </p>
    </div>
  );
};

export default DishCard;
