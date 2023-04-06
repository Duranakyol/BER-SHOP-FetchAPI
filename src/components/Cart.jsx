import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../assets/styles/Cart.css";

function Cart() {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <button className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={cartItem.img} alt="cartItem" height="200px" />
            </div>
            <div className="col-md-4">
              <h3>h3</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Cart;
