import { Link } from "react-router-dom";

export default function ButtonContact() {
  return (
    <div>
      <div className="">
        <Link className="ButtonContact" to="/contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
