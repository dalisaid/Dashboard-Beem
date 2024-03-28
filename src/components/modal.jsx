import React from "react";
import "../App.css";

export const Modal = ({ closeModal }) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="page">Name</label>
            <input name="page" />
          </div>
          <div className="form-group">
            <label htmlFor="page">Age</label>
            <input name="page" />
          </div>
          <div className="form-group">
            <label htmlFor="page">City</label>
            <input name="page" />
          </div>
          <div className="form-group">
            <label htmlFor="page">Gender</label>
            <input name="page" />
          </div>
          <div className="form-group">
            <label htmlFor="page">Email</label>
            <input name="page" />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};