import React from "react";

function Hero() {
  return (
    
    <div className="container my-5 mx-5 " >
      <div style={{display:"flex"}} className="mt-3 mb-3">
        <h2>Support Portal</h2>
        <button className="btn btn-primary ms-auto">My Tickets</button>
      </div>
      <div className="input-group flex-nowrap mb-2">
        <span className="input-group-text" id="addon-wrapping">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Eg: How do I open my account,How do I activate F&O... "
          aria-describedby="addon-wrapping"
        />
      </div>
      </div>
  


  );
}

export default Hero;
