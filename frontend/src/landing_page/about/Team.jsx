import React from "react";

function Team() {
  return (
    <div className="container-fluid p-5
    ">
      <div className="row p-5">
        <div className="col-6 p-5 text-center">
          <img src="/media/images/nithinKamath.jpg" style={{borderRadius:"50%"}} height="60%"></img>
          
          <p>Nithin Kamath</p>
          <p>Founder, CEO</p>
          
         
         
        </div>
        <div className="col-6 p-5 mt-5
        ">
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
