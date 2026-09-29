import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import API from "../api";
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";


const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
 const margin =Number(stockQuantity || 0) *Number(uid?.price || 0);

  const handleBuyClick = () => {
     API.post("/newOrder", {
      name: uid.name,
      qty: stockQuantity,
      price: uid.price,
      mode: "BUY",
    });

    GeneralContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
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
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
  <legend>Price</legend>
  <input
    type="number"
    value={uid.price}
    disabled
  />
</fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{margin.toFixed(2)}</span>
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