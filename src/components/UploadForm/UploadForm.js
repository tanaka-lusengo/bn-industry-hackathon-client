import React from "react";
import "./UploadForm.scss";
import steelImg from "../../assets/images/the-blowup-lqx_D7xIZ2o-unsplash.jpg";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

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
      <h2 className="form__sub-title">
        What is currently available from your inventory
      </h2>
      <section className="form__details-container">
        <div className="form__top-section">
          {/* image */}
          <div className="form__top-section-container">
            <div className="form__img-container">
              <img className="form__img" src={steelImg} alt="Steel" />
            </div>
            <div className="form__middle-text-container">
              <h2 className="form__text">Steel</h2>
              <p className="form__text">
                You have: 20 cubic meters of tubular steel In your inventory
              </p>
            </div>
          </div>
          <div className="form__top-section-container">
            <div className="form__img-container">
              <img className="form__img" src={steelImg} alt="Steel" />
            </div>
            <div className="form__middle-text-container">
              <h2 className="form__text">Steel</h2>
              <p className="form__text">
                You have: 20 cubic meters of tubular steel In your inventory
              </p>
            </div>
          </div>
          <div className="form__top-section-container">
            <div className="form__img-container">
              <img className="form__img" src={steelImg} alt="Steel" />
            </div>
            <div className="form__middle-text-container">
              <h2 className="form__text">Steel</h2>
              <p className="form__text">
                You have: 20 cubic meters of tubular steel In your inventory
              </p>
            </div>
          </div>
        </div>

        <h2 className="form__sub-heder">
          Arrange to have any excess steel sold by completing the form below.
        </h2>

        <div className="form__main-section">
          {/* company name */}
          <div className="form__field-container">
            <label className="form__label">
              <h4 className="form__label-title">Company</h4>
            </label>
            <input
              className="form__input"
              type="text"
              name="companyName"
              placeholder={companyName}
              required
            />
          </div>

          {/* title */}
          <div className="form__field-container">
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

          {/* category */}
          <div className="form__field-container">
            <label className="form__label">
              <h4 className="form__label-title">Category</h4>
            </label>
            <label className="form__radio-label" for="steel">
              Steel
            </label>
            <input
              className="form__radio-input"
              type="radio"
              name="category"
              value="steel"
              checked
            />
            <label className="form__radio-label" for="timber">
              Timber
            </label>
            <input
              className="form__radio-input"
              type="radio"
              name="category"
              value="timber"
            />
            <label className="form__radio-label" for="aluminium">
              Aluminium
            </label>
            <input
              className="form__radio-input"
              type="radio"
              name="category"
              value="aluminium"
            />
          </div>

          {/* quantity */}
          <div className="form__field-container">
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
          </div>

          {/* condition */}
          <div className="form__field-container">
            <label className="form__label">
              <h4 className="form__label-title">Condition</h4>
            </label>

            <label className="form__radio-label" for="new">
              New
            </label>
            <input
              className="form__radio-input"
              type="radio"
              name="condition"
              value="new"
              checked
            />
            <label className="form__radio-label" for="offcut">
              Off Cut
            </label>
            <input
              className="form__radio-input"
              type="radio"
              name="condition"
              value="offcut"
            />
            <label className="form__radio-label" for="scrap">
              Scrap
            </label>
            <input
              className="form__radio-input"
              type="radio"
              name="condition"
              value="scrap"
            />
          </div>

          {/* price */}
          <div className="form__field-container">
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
          </div>

          {/* location */}
          <div className="form__field-container">
            <label className="form__label">
              <h4 className="form__label-title">Pick-Up Location</h4>
            </label>
            <input
              className="form__input"
              type="text"
              name="location"
              placeholder={location}
              required
            />
          </div>

          {/* phoneNumber */}
          <div className="form__field-container">
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
        </div>
      </section>
      <div className="form__buttons-container">
        <div className="form__buttons-content">
          <Button buttonName={buttonName} />
        </div>
      </div>
    </form>
  );
}
