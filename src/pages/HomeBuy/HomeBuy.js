import React, { useState, useEffect } from "react";
import "./HomeBuy.scss";
// import steelImg from "../../assets/images/the-blowup-lqx_D7xIZ2o-unsplash.jpg";
// import bricksImg from "../../assets/images/matt-w-newman-TYiD9PaAHos-unsplash.jpg";
// import aluminum from "../../assets/images/mastars-FKBJLu4GSOI-unsplash.jpg";
import ListHomeBuy from "../../components/ListHome/ListHomeBuy";
import Navigation from "../../components/Navigation/Navigation";
import axios from "axios";
import { GET_NEW_MATERIAL_API_URL } from "../../api/endpoints";

export default function HomeBuy() {
	const [inventory, setInventory] = useState([]);

	useEffect(() => {
		axios
			.get(GET_NEW_MATERIAL_API_URL)
			.then((res) => {
				setInventory(res.data);
			})
			.catch((err) => console.log("Error with server ", err));
	}, []);

	console.log(inventory);

	return (
		<>
			<Navigation
				textInput={`Welcome to Re-Struct. You can buy and sell your excess construction materials in real-time helping reduce your costs and your CO2 emissions. `}
			/>
			<div className="home home__buy">
				<nav className="home__nav">
					<ul className="home__nav-container">
						<li className="home__nav-btn home__nav-btn-buy"></li>
						<li className="home__nav-btn home__nav-btn-sell"></li>
					</ul>
				</nav>
				<section className="home__content">
					{inventory.map((item) => {
						return <ListHomeBuy key={item.id} itemData={item} />;
					})}
				</section>
			</div>
		</>
	);
}
