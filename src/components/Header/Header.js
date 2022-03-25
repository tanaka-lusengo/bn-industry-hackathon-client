import React from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import Helen from "../../assets/images/fec7e1b577d082df8a3b81a3f9c82bc2.png";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__content">
        <div className="header__dummy"></div>
        <ul className="header__container">
          <Link to="/home-sell">
            <li className="header__item">Home</li>
          </Link>
          <Link to="/upload">
            <li className="header__item">Your Inventory</li>
          </Link>
          <div className="header__img-contaioner">
            <img className="header__img" src={Helen} alt="Helen" />
          </div>
        </ul>
      </nav>
    </header>
  );
}
