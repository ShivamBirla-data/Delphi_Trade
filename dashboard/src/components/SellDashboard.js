import React, { useState } from "react";
import SellActionWindow from "./SellActionWindow";

function SellDashboard() {
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const holdings = [
    {
      _id: 1,
      name: "TCS",
      qty: 10,
      price: 3500,
    },
    {
      _id: 2,
      name: "INFY",
      qty: 5,
      price: 1500,
    },
    {
      _id: 3,
      name: "HDFC",
      qty: 8,
      price: 1800,
    },
  ];

  const openSellWindow = (stock) => {
    setSelectedStock(stock);
    setIsSellWindowOpen(true);
  };

  const closeSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStock(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Holdings</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {holdings.map((stock) => (
            <tr key={stock._id}>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>₹{stock.price}</td>

              <td>
                <button
                  onClick={() => openSellWindow(stock)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  SELL
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isSellWindowOpen && (
        <SellActionWindow
          stock={selectedStock}
          closeWindow={closeSellWindow}
        />
      )}
    </div>
  );
}

export default SellDashboard;