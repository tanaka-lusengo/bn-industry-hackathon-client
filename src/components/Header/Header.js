import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <Link to="/home-sell">
            <h1 className="header__logo">Re-Struct</h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
