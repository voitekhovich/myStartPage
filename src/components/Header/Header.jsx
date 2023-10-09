import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__contant">
        <div className="header__container">
          <NavLink className="header__logo" to="/" end>
            av<span>code</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
