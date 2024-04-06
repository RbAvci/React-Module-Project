import Order from "../Order/Order";
import "./Restaurant.scss";

const Restaurant = () => {
  return (
    <section className="restaurant">
      <h3 className="restaurant__heading">Restaurant Orders</h3>
      <ul className="restaurant__list">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </section>
  );
};

export default Restaurant;
