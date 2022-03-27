import React from "react";
import "./Upload.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import UploadForm from "../../components/UploadForm/UploadForm";
import { POST_NEW_MATERIAL_API_URL } from "../../api/endpoints";
import { handleUploadComplete } from "../../Utilities/helpers";
import NavigationUpload from "../../components/Navigation/NavigationUpload";

export default function Upload() {
	// Form functionality code block
	// function to add new warehouse to be sent to server
	const postNewMaterial = (
		companyNameVal,
		titleVal,
		categoryVal,
		quantityVal,
		conditionVal,
		priceVal,
		locationVal,
		phoneNumberVal
	) => {
		return {
			company_name: companyNameVal,
			title: titleVal,
			category: categoryVal,
			quantity: quantityVal,
			condition: conditionVal,
			price: priceVal,
			location: locationVal,
			phone_no: phoneNumberVal,
			photo:
				"https://www.checkatrade.com/blog/wp-content/uploads/2020/02/timber-treatment.jpg",
		};
	};

	// axios promise to POST/ADD new material
	const postNewMaterialCall = (
		companyNameVal,
		titleVal,
		categoryVal,
		quantityVal,
		conditionVal,
		priceVal,
		locationVal,
		phoneNumberVal
	) => {
		axios.post(
			POST_NEW_MATERIAL_API_URL,
			postNewMaterial(
				companyNameVal,
				titleVal,
				categoryVal,
				quantityVal,
				conditionVal,
				priceVal,
				locationVal,
				phoneNumberVal
			)
		);
	};

	// useHistory react hook to go to home page
	const history = useHistory();
	const handleHomeClick = () => {
		history.push("/home-sell");
	};

	// form POST functionality event handler
	const handleNewMaterialSubmit = async (e) => {
		e.preventDefault();
		let form = e.target;
		let companyNameVal = form.companyName.value;
		let titleVal = form.title.value;
		let categoryVal = form.category.value;
		let quantityVal = form.quantity.value;
		let conditionVal = form.condition.value;
		let priceVal = form.price.value;
		let locationVal = form.location.value;
		let phoneNumberVal = form.phone.value;
		console.log(companyNameVal);

		try {
			postNewMaterialCall(
				companyNameVal,
				titleVal,
				categoryVal,
				quantityVal,
				conditionVal,
				priceVal,
				locationVal,
				phoneNumberVal
			);
		} catch (e) {
			console.log("handleNewMaterialSubmit() error -->", e);
		}
		form.reset();
		handleUploadComplete();
		handleHomeClick();
	};
	return (
		<div className="upload-add-new">
			<div className="upload-add-new__content-layer">
				<div className="upload-add-new__content">
					<NavigationUpload
						textInput={`Sell existing inventory or add a new inventory.`}
					/>
					<UploadForm
						companyName="Company Name"
						title="Title"
						category="Category"
						quantity="Quantity"
						condition="Condition"
						price="£ Price"
						location="Location"
						phoneNumber="Phone Number"
						buttonName="Sell"
						handleMaterialSubmit={handleNewMaterialSubmit}
					/>
				</div>
			</div>
		</div>
	);
}
