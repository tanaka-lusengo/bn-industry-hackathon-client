import React from "react";
import "./Navigation.scss";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavLink
          to="/home-buy"
          className={(isActive) => "nav__item" + (isActive ? "--active" : "")}
        >
          {/* <li className="nav__item"> */}
          {/* <button>BUY</button> */}
          <Button buttonName="BUY" />
          {/* </li> */}
        </NavLink>
        <NavLink
          to="/home-sell"
          className={(isActive) => "nav__item" + (isActive ? "--active" : "")}
        >
          {/* <li className="nav__item"> */}
          {/* <button>SELL</button> */}
          <Button buttonName="SELL" />
          {/* </li> */}
        </NavLink>
      </ul>
    </nav>
  );
}
