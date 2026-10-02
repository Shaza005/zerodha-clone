import React from 'react';

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">

        {/* Image */}
        <div className="col-12 col-md-6 p-4 p-md-5">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest broker"
            className="img-fluid"
          />
        </div>

        {/* Content */}
        <div className="col-12 col-md-6 p-4 p-md-5 mt-md-4">
          <h2>Largest stock broker in India</h2>

          <p className="mb-5">
            2+ million zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">

            <div className="col-12 col-md-6">
              <ul>
                <li><p>Future and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>

            <div className="col-12 col-md-6">
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. securities</p></li>
              </ul>
            </div>

          </div>

          <img
            src="media/images/pressLogos.png"
            alt="Press logos"
            className="img-fluid mt-3"
          />

        </div>

      </div>
    </div>
  );
}

export default Awards;