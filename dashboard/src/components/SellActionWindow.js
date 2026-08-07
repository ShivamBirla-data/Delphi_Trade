import React, { useContext, useState } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";
import { useNavigate } from "react-router-dom";
function SellActionWindow({ uid }) {
  const { closeSellWindow } = useContext(GeneralContext);

  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  // const handleSell = async () => {
  //   try {
  //     await axios.post("http://localhost:3002/sell", {
  //       name: uid,
  //       qty,
  //       price,
  //       mode: "SELL",
  //     });

  //     alert("Sell Order Placed");
  //     closeSellWindow();
  //     window.location.reload();
  //      // Redirect to Orders page
  //   navigate("/orders");

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
const handleSell = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3002/sellOrder",
      {
          name: uid || "",
          qty: Number(qty),
          price: Number(price),
        },
      {
        withCredentials: true,
      }
    );
 if (response.data.success) {

  closeSellWindow();

  window.location.href =
    "http://localhost:3001/orders";
}
    console.log("SELL RESPONSE:", response.data);

  } catch (error) {
    console.log(
      "SELL ERROR:",
      error.response?.data || error.message
    );
  }
};
  return (
    <div className="sell-overlay">
      <div className="sell-window">

        <h2>Sell Stock</h2>

        <h3>{uid}</h3>

        <input
          type="number"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <div className="buttons">
          <button className="sell-btn" onClick={handleSell}>
            SELL
          </button>

          <button className="cancel-btn" onClick={closeSellWindow}>
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}

export default SellActionWindow;