import React from 'react';

function Hero() {
  return (
    <div className="container">

      <div className="row text-center p-3 p-md-5">
        <h2>Charges</h2>
        <p className="text-muted">List of all charges and taxes</p>
      </div>

      <div className="row p-2 p-md-5">

        <div className="col-12 col-md-4 p-3 p-md-5 text-center">
          <img
            src="media/images/pricingEquity.svg"
            alt="Equity delivery"
            className="img-fluid"
          />
          <h3>Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free —
            ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 p-md-5 text-center">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday trades"
            className="img-fluid"
          />
          <h3>Intraday and F&O trades</h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
            Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 p-md-5 text-center">
          <img
            src="media/images/pricingMF.svg"
            alt="Mutual funds"
            className="img-fluid"
          />
          <h3>Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;