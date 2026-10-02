import React from 'react';

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">

        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="img-fluid mb-5"
        />

        <h2 className="mt-5">Invest in everything</h2>

        <p className="text-muted">
          Online platform to invest in stocks, derivatives, mutual funds,
          ETFs, bonds, and more.
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

export default Hero;