import React from "react";
import Item from "./Item";

const DisplayShoppingItems = ({ items }) => {
  return (
    <ul>
      {items.map((ingredient) => {
        return (
          <li key={ingredient.id}>
            {" "}
            <Item item={ingredient} />
          </li>
        );
      })}
    </ul>
  );
};
export default DisplayShoppingItems;
