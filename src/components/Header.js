import Nav from "./Nav";
import { Link } from "react-router-dom";
import Logo from "../icons_assets/Logo .png"

const Header = () => {
  return (
    <header>
      <Link to="/"><img src={Logo} alt="little lemon"/></Link>
      <Nav />
    </header>
  );
};

export default Header;
