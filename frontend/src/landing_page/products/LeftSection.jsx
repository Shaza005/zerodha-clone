import React from 'react';

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <div className="container p-3 p-md-5">
      <div className="row align-items-center">

        {/* Product image */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid"
          />
        </div>

        {/* Product information */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <div className="mt-2 p-2 p-md-5">
            <h2>{productName}</h2>

            <p className="mt-3 text-muted">
              {productDescription}
            </p>
          </div>

          {/* Links */}
          <div className="d-flex flex-wrap justify-content-center gap-3 p-3">
            <a href={tryDemo}>
              Try Demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a href={learnMore}>
              Learn More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>

          {/* App store buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;