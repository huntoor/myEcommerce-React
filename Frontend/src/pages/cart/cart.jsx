import { products } from "../../api/ProductList";
import { ShopContext } from "../../context/shopContext";
import CartItem from "./cartItem";
import Navbar from "../../components/navbar";
import validate from "../../components/validate";
import "./cart.css";

import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const cartItemsAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <>
      <Navbar isLoggedin={validate()} username={localStorage.getItem("token")} />
      <div className="cart">
        <div className="cartTitle">
          <h1>Your Cart</h1>
        </div>

        <div className="cartItems">
          {
            products.map((p) => {
              if (cartItems[p.id] !== 0) {
                return (
                  <Fragment key={p.id}>
                    <CartItem data={p} />
                  </Fragment>
                )
              } else {
                return ;
              }
            })
          }
        </div>        


        {
        cartItemsAmount !== 0 ? 
          <div className="checkout">
            <p>Subtotal: ${cartItemsAmount.toFixed(2)}</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button onClick={() => navigate("/checkout")}>Checkout</button>
          </div>
          :
          <>
            <h1>Your Cart is Empty</h1>
          </>
        }

      </div>
    </>
  );
}

export default Cart;