import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './BuyActionWindow.css';
import GeneralContext from "./GeneralContext";
import { useNavigate } from "react-router-dom";

const BuyActionWindow = ({ uid, closeBuyWindow }) => {
  const [stockName, setStockName] = useState(uid);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  // use context if needed in future
  useContext(GeneralContext);
  

  // const handleBuyClick = async () => {

  //   try {

  //     await axios.post("http://localhost:3002/newOrder", {
  //       name: uid,
  //       qty: stockQuantity,
  //       price: stockPrice,
  //       mode: "BUY",
  //     });

  //     closeBuyWindow();
  //      window.location.reload();
  //      // Redirect to Orders page
  //     navigate("/orders");

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
const handleBuyClick = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3002/newOrder",
      {
        name: stockName,
        qty: stockQuantity,
        price: stockPrice,
      },
      {
        withCredentials: true,
      }
    );

      if (response.data.success) {

  closeBuyWindow();

  window.location.href =
    "http://localhost:3001/orders";
}

    console.log("BUY RESPONSE:", response.data);

  } catch (error) {

    console.log(
      "BUY ERROR:",
      error.response?.data
    );

  }
};
  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
