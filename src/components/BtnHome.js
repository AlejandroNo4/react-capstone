import { Link } from "react-router-dom";
import logo from "../assets/magic-logo.png";

const BtnHome = () => (
  <Link to="/" data-testid="home-btn" data-testid="home-btn">
    <img alt="logo" className="nav-logo" src={logo} />
  </Link>
);

export default BtnHome;
