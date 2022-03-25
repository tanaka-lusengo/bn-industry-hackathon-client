import React from "react";
import "./HomeBuy.scss";
import steelImg from "../../assets/images/the-blowup-lqx_D7xIZ2o-unsplash.jpg";
import bricksImg from "../../assets/images/matt-w-newman-TYiD9PaAHos-unsplash.jpg";
import aluminum from "../../assets/images/mastars-FKBJLu4GSOI-unsplash.jpg";
import { v4 as uuidv4 } from "uuid";
import ListHomeBuy from "../../components/ListHome/ListHomeBuy";
import Navigation from "../../components/Navigation/Navigation";

export default function HomeBuy() {
  const homeBuyData = [
    {
      title: "Steel",
      description: "Good quality steel, looking for a new home",
      category: "Steel",
      quantity: "3 Tonne",
      price: "£400 per tonne",
      image: steelImg,
    },
    {
      title: "Aluminum",
      description: "Good quality aluminum, looking for a new home",
      category: "Aluminum",
      quantity: "50 Kg",
      price: "£0.50 per Kg",
      image: aluminum,
    },
    {
      title: "Bricks",
      description: "Good quality bricks, looking for a new home",
      category: "Bricks",
      quantity: "1,500 bricks",
      price: "£1 per brick",
      image: bricksImg,
    },
  ];

  return (
    <>
      <Navigation />
      <div className="home home__buy">
        <nav className="home__nav">
          <ul className="home__nav-container">
            <li className="home__nav-btn home__nav-btn-buy"></li>
            <li className="home__nav-btn home__nav-btn-sell"></li>
          </ul>
        </nav>
        <section className="home__content">
          {homeBuyData.map((sellData) => {
            return <ListHomeBuy key={uuidv4()} sellData={sellData} />;
          })}
        </section>
      </div>
    </>
  );
}