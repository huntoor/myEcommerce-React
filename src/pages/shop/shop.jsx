import "./shop.css"

// import ProductList from "./productList";
import { products } from "../../api/ProductList";
import Product from "./product";

const Shop = () => {

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Enjoy \(◦'⌣'◦)/</h1>
      </div>

      <div className="products">
        {
          products.map((p) => (
            <Product data={p}/>
          ))
        }
      </div>
    </div>
  );
}

export default Shop;