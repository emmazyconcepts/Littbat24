import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">LittBat24</Link>
      </p>

      <div></div>

      <select className="logo" name="" id="">
        {" "}
        <option>Shop by department</option>
        <option>
          {" "}
          <a href="/policy">12v batteries</a>
        </option>
        <option>24v batteries</option>
        <option>48v batteries</option>
        <option>512v batteries</option>
        <option>380v batteries</option>
        <option>409v batteries</option>
        <option>6v batteries</option>
      </select>

      <h1 className="logo">Todays deal</h1>
      <h1 className="logo">New Products</h1>
      <h1 className="logo">Offers</h1>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
