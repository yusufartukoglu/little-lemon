import Logo from "../icons_assets/Logo.svg";

const Header = () => {
  return (
    <nav>
      <ul>
        <img src={Logo} fetchpriority="high" alt="logo" className="topLogo" />
        <li>Home</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Header;
