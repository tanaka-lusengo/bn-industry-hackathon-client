import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

export default function NavigationUpload({ textInput }) {
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
              "navUp__item navUp__item" + (!isActive ? "" : "--active")
            }
          >
            BUY
          </NavLink>
          <NavLink
            to="/upload"
            className={(isActive) =>
              "navUp__item navUp__item" + (!isActive ? "" : "--active")
            }
          >
            SELL
          </NavLink>
        </ul>
      </nav>
    </>
  );
}
