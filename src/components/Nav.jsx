import Logo from "../assets/nav/Logo.svg";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between py-8">
      {/* logo */}
      <div className="logo flex items-center space-x-2">
        <img src={Logo} alt="open enterprise logo" />
        <h1 className="font-bold text-2xl">Open Enterprise</h1>
      </div>
      {/* links */}
      <div className="links">
        <ul className="flex space-x-12 font-semi-bold">
          <li className="transition-all duration-200 hover:text-greenCustom">
            <a href="#">Why Open Enterprise</a>
          </li>
          <li className="transition-all duration-200 hover:text-greenCustom">
            <a href="#">Features</a>
          </li>
          <li className="transition-all duration-200 hover:text-greenCustom">
            <a href="#">Contribute</a>
          </li>
          <li className="transition-all duration-200 hover:text-greenCustom">
            <a href="#">Request early access</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
