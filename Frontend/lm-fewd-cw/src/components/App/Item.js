import React from "react";

const Item = ({ item }) => {
  return <>{item.name},{item.serving_size_g}, {item.calories}, {item.fat_total_g}. {item.fat_saturated_g}, {item.protein_g}, {item.carbohydrates_total_g}, {item.sugar_g}, {item.fiber_g}, {item.cholesterol_g}, {item.potassium_g}, {item.sodium_g}</>;
};

export default Item;
