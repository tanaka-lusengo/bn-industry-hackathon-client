import React from "react";
import DeleteModal from "./DeleteModal.scss";

export default function DeleteModal() {
  if (!show) {
    return null;
  }
  return (
    <div className="modal" onClick={setClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__img-container">
          <img
            className="modal__img"
            src={closeButton}
            alt="close button icon"
            onClick={setClose}
          />
        </div>
        <div className="modal__header">
          <h1 className="modal__header-text">{`Delete ${title} warehouse?`}</h1>
        </div>
        <div className="modal__body">
          <p className="modal__body-content">
            {`Please confirm that you'd like to delete the ${title} from the list
            of warehouses. You won't be able to undo this action.`}
          </p>
        </div>
        <div className="modal__footer">
          <SecondaryButtonModal setClose={setClose} buttonName="Cancel" />
          <DeleteButtonWarehouse
            id={id}
            handleDeleteWarehouse={handleDeleteWarehouse}
            buttonName="Delete"
          />
        </div>
      </div>
    </div>
  );
}
