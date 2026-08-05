import React, { useState } from "react";
import "./OpenAccountPopup.css";

const OpenAccountPopup = ({ closePopup }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Account Open Request Submitted");

    closePopup();
  };

  return (
    <div className="popup-overlay">
      <div className="popup">

        <h2>Open Account</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
          />

          <button type="submit">
            Submit
          </button>

          <button
            type="button"
            onClick={closePopup}
          >
            Close
          </button>

        </form>

      </div>
    </div>
  );
};

export default OpenAccountPopup;