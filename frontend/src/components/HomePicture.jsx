import "./HomePicture.css";
import { Link, NavLink } from "react-router-dom";

const getActiveLinkStyle = ({ isActive }) => {
  if (isActive) return { backgroundColor: "#2c3b8e", color: "white" };
  return { backgroundColor: "#2c3b8e", color: "#e6161c" };
};

export default function HomePicture() {
  return (
    <div className="gallery">
      <Link to="/products">
        <img
          src="https://www.lesacduberger.com/wp-content/uploads/2020/12/139_LeSacduBerger-Juin2020_rogne-350x570.jpg"
          alt="Sac à dos en cuir"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/1220/1746/products/bague-artisanale-tibetaine-mantra-om-en-argent-massif-s925-bagues-artisan-dasie-664680_2000x.jpg?v=1602906147"
          alt="Bague artisanale tibétaine"
        />
        <img
          src="https://cdn.manomano.com/images/images_products/21017569/P/47605280_1.jpg"
          alt="Vase céramique moutarde"
        />
        <img
          src="https://i0.wp.com/lilm.co/wp-content/uploads/2017/05/c%C3%A9ramique-poterie-1.jpg?w=846&ssl=1"
          alt="Céramiques bleues"
        />
        <img
          src="https://la-fourmi-rouge.fr/345/collier-ethnique-artisanal-narcisse.jpg"
          alt="Colliers ethniques"
        />
        <img
          src="https://i.pinimg.com/736x/1b/26/b1/1b26b14c4c0bc5ab5943319b6c19ea84.jpg"
          alt="Chaussures de ville homme"
        />
      </Link>
      <NavLink className="link" style={getActiveLinkStyle} to="/contact">
        Contact
      </NavLink>
    </div>
  );
}
