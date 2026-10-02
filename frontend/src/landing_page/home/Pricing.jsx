import React from 'react';

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row">

        {/* Left section */}
        <div className="col-12 col-md-6 p-3 p-md-4">
          <h3>Unbeatable pricing</h3>

          <p className="text-muted mt-3">
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>

          <a href="">
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* Right section */}
        <div className="col-12 col-md-6 p-3 p-md-4">
          <div className="row">

            <div className="col-12 col-md-4 d-flex align-items-start mb-4 mb-md-0">
              <img
                src="media/images/pricing0.svg"
                height="35%"
                alt="Pricing"
              />
              <p className="text-muted small ms-2">
                Free account opening
              </p>
            </div>

            <div className="col-12 col-md-4 d-flex align-items-start mb-4 mb-md-0">
              <img
                src="media/images/pricing0.svg"
                height="35%"
                alt="Pricing"
              />
              <p className="text-muted small ms-2">
                Free equity delivery and direct mutual funds
              </p>
            </div>

            <div className="col-12 col-md-4 d-flex align-items-start">
              <img
                src="media/images/intradayTrades.svg"
                height="35%"
                alt="Intraday trades"
              />
              <p className="text-muted small ms-2">
                Intraday and F&O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;