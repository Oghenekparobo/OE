const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-8">
      {/* logo */}
      <div className="logo flex items-center space-x-2">
        <h1 className="font-bold text-2xl">Open Enterprise</h1>
      </div>
      {/* links */}
      <div className="links">
        <ul className="flex space-x-12 font-semi-bold">
          <li className="transition-all duration-200 hover:text-greenCustom">
            <a href="#">Documentation</a>
          </li>
          <li className="transition-all duration-200 hover:text-greenCustom">
            <a href="#">GitHub</a>
          </li>
          <li className="transition-all duration-200 hover:text-greenCustom">
            <a href="#">Twitter</a>
          </li>
          <li className="transition-all duration-200 hover:text-greenCustom">
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
