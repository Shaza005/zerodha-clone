import React from 'react';

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore
}) {
  return (
    <div className="container p-3 p-md-5">
      <div className="row align-items-center">

        {/* Product information */}
        <div className="col-12 col-md-6 p-3 p-md-5 order-2 order-md-1">
          <div className="mt-2 p-2 p-md-5">
            <h2>{productName}</h2>

            <p className="mt-3 text-muted">
              {productDescription}
            </p>

            <a href={learnMore}>
              Learn More{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>

        {/* Product image */}
        <div className="col-12 col-md-6 text-center order-1 order-md-2">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;