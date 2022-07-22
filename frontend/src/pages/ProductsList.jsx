import { useState, useEffect } from "react";
import ProductsItem from "../components/ProductsItem";
import "./ProductsList.css";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/products`, {
      withCredentials: true,
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="Wrapper2">
      <h1 className="ProductsTitle"> Liste des produits</h1>
      <div className="ProductsSubtitlesList">
        {" "}
        <ul>
          {" "}
          <li>Nom </li> <li>Description</li> <li>Price</li>
        </ul>
      </div>
      <div className="ProductsListItem">
        {products.map((product) => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
