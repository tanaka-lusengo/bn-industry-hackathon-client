import React from "react";
import "./ListHome.scss";
import { Button } from "../Button/Button";

export default function ListHomeBuy({ sellData }) {
  return (
    <article className="list-home">
      <div className="list-home__left-img-container">
        <img
          className="list-home__img"
          src={sellData.image}
          alt={sellData.title}
        />
      </div>
      <div className="list-home__middle-text-container">
        <h2 className="list-home__text">{sellData.title}</h2>
        <h3 className="list-home__text">Category: {sellData.category}</h3>
        <p className="list-home__text">{sellData.description}</p>
        <p className="list-home__text">{sellData.quantity} available</p>
        <p className="list-home__text">{sellData.price}</p>
      </div>
      <div className="list-home__button">
        <Button buttonName="BUY" />
      </div>
    </article>
  );
}
