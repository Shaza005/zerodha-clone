import React from "react";

function Hero() {
  return (
    <div className="container my-5 px-3 px-md-5">

      <div className="d-flex align-items-center mt-3 mb-3">
        <h2 className="mb-0">Support Portal</h2>

        <button className="btn btn-primary ms-auto">
          My Tickets
        </button>
      </div>

      <div className="input-group flex-nowrap mb-2">
        <span className="input-group-text" id="addon-wrapping">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>

        <input
          type="text"
          className="form-control"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
          aria-describedby="addon-wrapping"
        />
      </div>

    </div>
  );
}

export default Hero;