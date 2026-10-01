import React from "react";

function Universe() {
  return (
    <div className="container mt-5 ">
      <div className="row text-center mb-5">
       <div className="mb-5">
        <h1 >The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
       </div>

        <div className="col-4 p-3 ">
          <img className="img-fluid d-block mx-auto  w-75" 
 src="media/images/zerodhaFundhouse.png"></img>
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-3">
          <img className="img-fluid d-block mx-auto " 
 src="media/images/sensibullLogo.svg"></img>
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mb-3">
          <img className="img-fluid d-block mx-auto  " 
src="media/images/dittoLogo.png"></img>
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img className="img-fluid d-block mx-auto  " 
src="media/images/streakLogo.png"></img>
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img className="img-fluid d-block mx-auto  " 
src="media/images/smallcaseLogo.png"></img>
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img className="img-fluid d-block mx-auto  " 
src="media/images/goldenpiLogo.png"></img>
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <button className='p-2 btn btn-primary fs-5 mt-3' style={{width:"20%",margin:"0 auto"}}>SignUp for free</button>
      </div>
    </div>
  );
}

export default Universe;
