import React from "react";
import "./UploadForm.scss";
import steelImg from "../../assets/images/the-blowup-lqx_D7xIZ2o-unsplash.jpg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

export default function UploadForm({
  companyName,
  title,
  category,
  quantity,
  condition,
  price,
  location,
  phoneNumber,
  buttonName,
  handleMaterialSubmit,
}) {
  return (
    <form className="form" onSubmit={handleMaterialSubmit}>
      <section className="form__details-container">
        <h2 className="form__sub-title">Add New Waste Material</h2>

        <div className="form__top-section">
          {/* image */}
          <div className="form__img-container">
            <img className="form__img" src={steelImg} alt="Steel" />
          </div>
          <div className="form__description">
            {/* title */}
            <label className="form__label">
              <h4 className="form__label-title">Title</h4>
            </label>
            <input
              className="form__input"
              type="text"
              name="description"
              placeholder={title}
              required
            />
          </div>
        </div>

        <div className="form__main-section">
          {/* company name */}
          <label className="form__label">
            <h4 className="form__label-title">Company Name</h4>
          </label>
          <input
            className="form__input"
            type="text"
            name="companyName"
            placeholder={companyName}
            required
          />

          {/* category */}
          <label className="form__label">
            <h4 className="form__label-title">Category</h4>
          </label>
          <input
            className="form__input"
            type="text"
            name="category"
            placeholder={category}
            required
          />

          {/* quantity */}
          <label className="form__label">
            <h4 className="form__label-title">Quantity</h4>
          </label>
          <input
            className="form__input"
            type="text"
            name="quantity"
            placeholder={quantity}
            required
          />

          {/* condition */}
          <label className="form__label">
            <h4 className="form__label-title">Condition</h4>
          </label>
          <input
            className="form__input"
            type="text"
            name="condition"
            placeholder={condition}
            required
          />

          {/* price */}
          <label className="form__label">
            <h4 className="form__label-title">Price</h4>
          </label>
          <input
            className="form__input"
            type="text"
            name="price"
            placeholder={price}
            required
          />

          {/* location */}
          <label className="form__label">
            <h4 className="form__label-title">Location</h4>
          </label>
          <input
            className="form__input"
            type="text"
            name="location"
            placeholder={location}
            required
          />

          {/* phoneNumber */}
          <label className="form__label">
            <h4 className="form__label-title">Phone Number</h4>
          </label>
          <input
            className="form__input"
            type="text"
            name="phone"
            placeholder={phoneNumber}
            required
          />
        </div>
      </section>
      <div className="form__buttons-container">
        <div className="form__buttons-content">
          <button className="button">Sell</button>
          <Button buttonName={buttonName} />
        </div>
      </div>
    </form>
  );
}
