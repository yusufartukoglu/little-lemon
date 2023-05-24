import Nav from "./Nav";
import { Link } from "react-router-dom";
import Logo from "..//icons_assets/Logo.svg";
const Header = () => {
  return (
    <header>
      <Link to="/">{Logo}</Link>
      <Nav />
    </header>
  );
};

export default Header;
