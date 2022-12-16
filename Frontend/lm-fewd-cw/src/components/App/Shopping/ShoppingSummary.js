import React, { useContext } from "react";
import ShoppingContext from "./ShoppingContext";

export default function OrderSummary() {
  const [order, setOrder] = useContext(ShoppingContext);
  const removeItem = (e, item) => {
    let updatedOrder = order.filter((element) => {
      return element !== item;
    });
    setOrder(updatedOrder);
  };

  return (
    <div>
      <h2>Your Shopping List</h2>
      <h5>You can click on an item in your order to remove it.</h5>
      <ul>
        {order.map((item, index) => (
          <li key={index} onClick={(e) => removeItem(e, item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}