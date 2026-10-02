import React from "react";

function Team() {
  return (
    <div className="container-fluid p-3 p-md-5">
      <div className="row p-2 p-md-5">

        {/* Profile */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid"
            style={{
              borderRadius: "50%",
              maxWidth: "250px",
            }}
          />

          <p className="mt-3">Nithin Kamath</p>
          <p>Founder, CEO</p>
        </div>

        {/* Description */}
        <div className="col-12 col-md-6 p-3 p-md-5 mt-md-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>

      </div>
    </div>
  );
}

export default Team;