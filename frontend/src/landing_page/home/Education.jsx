import React from 'react';

function Education() {
  return (
    <div className="container p-3 p-md-5">
      <div className="row p-2 p-md-5">

        {/* Image */}
        <div className="col-12 col-md-6 p-3 p-md-4 text-center">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
          />
        </div>

        {/* Content */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h3 className="mb-5">
            Free and open market education
          </h3>

          <p>
            Varsity, the largest online stock market education book in the
            world covering everything from the basics to advanced trading.
          </p>

          <a href="">
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="">
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>

        </div>

      </div>
    </div>
  );
}

export default Education;