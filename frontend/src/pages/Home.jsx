import ButtonContact from "@components/ButtonContact";
import { Link } from "react-router-dom";
import HomePicture from "../components/HomePicture";
import TextContainer from "../components/TextContainer";

export default function Home() {
  return (
    <div className="Wrapper">
      <ButtonContact />
      <h1> Place des arts </h1>
      <Link to="/products">
        <HomePicture />
      </Link>
      <TextContainer />
    </div>
  );
}
