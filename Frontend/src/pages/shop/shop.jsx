import "./shop.css"
import Navbar from "../../components/navbar";
import { products } from "../../api/ProductList";
import Product from "./product";
import validate from "../../components/validate";

// import ProductList from "./productList";
import { Fragment } from "react";

const Shop = () => {
  const handleSignOut = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <Navbar isLoggedin={validate()} username={localStorage.getItem("token")} />
      <div className="shop">
        <div className="shopTitle">
          <h1>Enjoy \(◦'⌣'◦)/</h1>
        </div>

        <div className="products">
          {
            products.map((p) => (
              <Fragment key={p.id}>
                <Product data={p} />
              </Fragment>
            ))
          }
        </div>
        {
          validate() && 
            <div className="singout">
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
        }
      </div>
    </>
  );
}

export default Shop;