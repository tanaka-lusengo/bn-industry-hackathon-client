import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

export default function Navigation({ textInput }) {
  return (
    <>
      <header className="header">
        <p className="header__text">{textInput}</p>
      </header>
      <nav className="nav">
        <ul className="nav__list">
          <NavLink
            to="/home-buy"
            className={(isActive) =>
              "nav__item nav__item" + (!isActive ? "" : "--active")
            }
          >
            BUY
          </NavLink>
          <NavLink
            to="/upload"
            className={(isActive) =>
              "nav__item nav__item" + (!isActive ? "" : "--active")
            }
          >
            SELL
          </NavLink>
        </ul>
      </nav>
    </>
  );
}
