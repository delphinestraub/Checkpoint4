import { Link } from "react-router-dom";
import "./ButtonContact.css";

export default function ButtonContact() {
  return (
    <div>
      <div className="">
        <Link className="ButtonContact" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
