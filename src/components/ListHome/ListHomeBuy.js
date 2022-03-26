import React from "react";

import "./ListHome.scss";
import { Button } from "../Button/Button";

const ListHomeBuy = ({ itemData }) => {
	const source = itemData.photo;
	let date = new Date(itemData.date_added);
	return (
		<article className="list-home">
			<div className="list-home__left-img-container">
				<img className="list-home__img" src={source} alt={itemData.photo} />
			</div>
			<div className="list-home__middle-text-container">
				<h2 className="list-home__text">{itemData.title}</h2>
				<h3 className="list-home__text">Category: {itemData.category}</h3>
				<p className="list-home__text">Quantity: {itemData.quantity}</p>
				<p className="list-home__text">Condition: {itemData.condition}</p>
				<p className="list-home__text">Price: {itemData.price}</p>
				<p className="list-home__text">Location: {itemData.location}</p>
				<p className="list-home__text">Phone: {itemData.phone_no}</p>
				<p className="list-home__text">
					Date added: {date.toLocaleDateString()}
				</p>
			</div>
			<div className="list-home__button">
				<Button buttonName="BUY" />
			</div>
		</article>
	);
};

export default ListHomeBuy;
