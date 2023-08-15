import "./shop.css"

// import ProductList from "./productList";
import { products } from "../../api/ProductList";
import Product from "./product";
import { Fragment } from "react";

const Shop = () => {

  return (
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
    </div>
  );
}

export default Shop;