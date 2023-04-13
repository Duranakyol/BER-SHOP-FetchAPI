import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { delCart } from "../redux/action";
import "../assets/styles/Cart.css";

const Cart = () => {
  const state = useSelector((state) => state.addCart);
  const dispatch = useDispatch();

  const cartItems = (cartItem) => {
    return (
      <div className="cartContainer" key={cartItem.id}>
        <div className="box">
          <button className="btn">MyButton</button>
          <div>
            <div>
              <img src={cartItem.img} alt={cartItem.title} />
            </div>
            <div>
              <h3>{}</h3>
              <p> {} </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // const dellProduct = (product) => {
  //   dispatch(delCart(product));
  // };

  return <>{state.length !== 0 && state.map(cartItems)}</>;
};

export default Cart;
