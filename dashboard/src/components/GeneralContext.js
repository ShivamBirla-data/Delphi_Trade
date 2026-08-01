import React, { useState, createContext } from "react";
import SellActionWindow from "./SellActionWindow";
import BuyActionWindow from "./BuyActionWindow";
import AddFundWindow from "./AddFundWindow";

const GeneralContext = createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},

  openSellWindow: (uid) => {},
  closeSellWindow: () => {},

  openFundWindow: () => {},
  closeFundWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState("");
  const [isFundWindowOpen, setIsFundWindowOpen] = useState(false);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const openSellWindow = (uid) => {
    setSelectedStock(uid);
    setIsSellWindowOpen(true);
  };

  const closeSellWindow = () => {
    setIsSellWindowOpen(false);
  };

  //ADD Funds
  const openFundWindow = () => {
    console.log("Opening Popup");
    setIsFundWindowOpen(true);
  };

  const closeFundWindow = () => {
    setIsFundWindowOpen(false);
  };
  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: openSellWindow,
        closeSellWindow: closeSellWindow,
        openFundWindow: openFundWindow,
        closeFundWindow: closeFundWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStock} />}

      {isFundWindowOpen && <AddFundWindow />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
