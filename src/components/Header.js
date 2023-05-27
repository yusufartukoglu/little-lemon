import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/"><img src="../icons_assets/Logo .png" alt="little lemon"/></Link>
      <Nav />
    </header>
  );
};

export default Header;
