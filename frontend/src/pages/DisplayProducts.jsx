import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./DisplayProducts.css";
import "../components/ButtonContact.css";
import { Link } from "react-router-dom";

export default function DisplayProducts() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products?category=${category}`)
      .then((res) => setProducts(res.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="productCard">
        {products.map((p) => (
          <p className="card" key={p.id}>
            <div className="card_header">
              <img src={p.url} alt="articles" />
            </div>
            <div className="card_body">
              <h4 className="name">{p.name}</h4>
            </div>
            <div className="card_footer">
              <p className="description">{p.description}</p>
            </div>
          </p>
        ))}
      </div>
      <div className="contact">
        <Link className="ButtonContact" to="/contact">
          Contact us
        </Link>
      </div>
    </div>
  );
}
