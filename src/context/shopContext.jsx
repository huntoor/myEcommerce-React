import { products } from '../api/ProductList';

import { createContext, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
}

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((p) => p.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }

    return totalAmount;
  }

  const addToChart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  }

  const removeFromChart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  }

  const deleteFromCart = (itemID) => {
    setCartItems((prev) => ({...prev, [itemID]: 0 }));
  }

  const updateCartItemCount = (newAmount, itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: newAmount }));
  }

  const contextValue = {
    cartItems,
    addToChart,
    removeFromChart,
    updateCartItemCount,
    getTotalCartAmount,
    deleteFromCart
  }

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

export default ShopContextProvider;
