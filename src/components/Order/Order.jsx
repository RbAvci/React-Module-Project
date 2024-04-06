import RestaurantButton from "../RestaurantButton/RestaurantButton";
import React, { useState } from "react";
import "./Order.scss";

export default function Order({ orderType }) {
  const [orders, setOrders] = useState(0);
  const handleAddOrder = () => {
    setOrders(orders + 1);
  };

  return (
    <li className="order">
      {orderType}: {orders}
      <RestaurantButton className="order-button" handleAddOrder={handleAddOrder} />
    </li>
  );
}
