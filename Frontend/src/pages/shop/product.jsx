// this file return one product from the product list
// get props from productList.jsx
import { ShopContext } from "../../context/shopContext";

import { useContext } from "react";


const Product = (props) => {
  const { id, title, price, category, description, image } = props.data;

  const { addToChart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product" key={id}>
      <img src={image} />
      <div className="description">
        <p><b>{title}</b></p>
        <p>${price}</p>
        <button className="addToCartBttn" onClick={ () => addToChart(id) }>
          Add to Cart {cartItemAmount > 0 && <>({ cartItemAmount })</>}
        </button>
      </div>
    </div>
  );
}

export default Product;