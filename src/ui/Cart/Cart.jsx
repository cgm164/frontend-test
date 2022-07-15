import CartIcon from "../icons/Cart.icon";
import "./Cart.css";

const Cart = (props) => {
  const { count } = props;
  return (
    <div className="cart">
      <div className="cart__icon-container">
        <CartIcon />
        <span className="cart__count">{count}</span>
      </div>
      <span className="cart__title">Mi carrito</span>
    </div>
  );
};

export default Cart;
