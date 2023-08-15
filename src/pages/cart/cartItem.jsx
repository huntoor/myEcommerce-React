import { ShopContext } from "../../context/shopContext";

import { useContext } from "react";

const CartItem = (props) => {
  const { id, title, price, category, description, image } = props.data;

  const { cartItems,
    addToChart,
    removeFromChart,
    deleteFromCart
  } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={image} />
      <div className="description">
        <p>
          <b>{ title }</b>
        </p>
        <p>${ price }</p>
        <div className="countHandler">
          <button onClick={() => removeFromChart(id)}> - </button>
          <input value={cartItems[id]} onChange={() => console.log("test")} />
          <button onClick={() => addToChart(id)}> + </button>
        </div>
        <div className="deleteItem">
          <button onClick={() => deleteFromCart(id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem;