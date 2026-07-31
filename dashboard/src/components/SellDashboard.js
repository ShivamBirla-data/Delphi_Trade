import React, { useState } from "react";
import SellActionWindow from "./SellActionWindow";

function SellDashboard() {

  const [showSellWindow, setShowSellWindow] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const stock = {
    name: "TCS",
    price: 3500,
  };

  const openSellWindow = () => {
    setSelectedStock(stock);
    setShowSellWindow(true);
  };

  return (
    <div>

      <button onClick={openSellWindow}>
        SELL
      </button>

      {showSellWindow && (
        <SellActionWindow
          stock={selectedStock}
          closeWindow={() => setShowSellWindow(false)}
        />
      )}

    </div>
  );
}

export default SellDashboard;