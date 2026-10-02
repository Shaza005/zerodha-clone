import React from "react";

function Hero() {
  return (
    <div className="container p-3 p-md-5">
      <div className="row text-center lh-lg">
        <h2 className="mt-3 mt-md-5">Zerodha Products</h2>

        <h3 className="text-muted">
          Sleek, modern, and intuitive trading platforms
        </h3>

        <p>
          Check out our investment offerings{" "}
          <i className="fa-solid fa-arrow-right-long"></i>
        </p>
      </div>
    </div>
  );
}

export default Hero;