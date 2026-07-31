import React, { useState } from "react";
import axios from "axios";

function SellActionWindow({ stock, onClose }) {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(stock.price);

  const handleSell = async () => {
    try {
      await axios.post("http://localhost:3002/sell", {
        name: stock.name,
        qty,
        price,
        mode: "SELL",
      });

      alert("Sell Order Placed Successfully");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Sell Stock</h2>

        <label>Stock Name</label>
        <input
          type="text"
          value={stock.name}
          readOnly
          style={styles.input}
        />

        <label>Quantity</label>
        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          style={styles.input}
        />

        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          style={styles.input}
        />

        <div style={{ marginTop: "20px" }}>
          <button style={styles.sellBtn} onClick={handleSell}>
            SELL
          </button>

          <button style={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    width: "400px",
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },

  sellBtn: {
    background: "red",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },

  cancelBtn: {
    background: "gray",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default SellActionWindow;