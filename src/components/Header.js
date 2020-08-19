import React from "react";
import logo from "../logo.svg";
function Header() {
  return (
    <div className="app__header">
      <header className="app__header__container">
        <img src={logo} className="app__header__logo" alt="logo" />
        <p>Demo App</p>
      </header>
    </div>
  );
}

export default Header;
