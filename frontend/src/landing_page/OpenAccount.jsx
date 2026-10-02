import React from 'react';

function OpenAccount() {
  return (
    <div className="container p-3 p-md-5">
      <div className="row text-center">

        <h2>Open a Zerodha account</h2>

        <p className="text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
          and F&O trades.
        </p>

        <button
          className="p-2 btn btn-primary fs-5 mx-auto"
          style={{ width: "200px" }}
        >
          SignUp for free
        </button>

      </div>
    </div>
  );
}

export default OpenAccount;