import React from "react";
import { Link } from "react-router-dom";

import StarRatings from "react-star-ratings";
import "@google/model-viewer";

const ProductItem = ({ product, columnSize }) => {
  return (
    <div
      className={`col-sm-12 col-md-6 col-lg-${columnSize} col-xl-3 my-3 overflow-hidden`}
    >
      <div className="card rounded">
        <div className="position-relative bg-light overflow-hidden">
          {product?.model ? (
            <model-viewer
              src={product?.model.url}
              poster={product?.images[0]?.url}
              alt="A 3D model"
              class={"w-100"}
              style={{ width: 300, height: 300 }}
              camera-controls
              auto-rotate
            ></model-viewer>
          ) : (
            <img
              className="card-img-top mx-auto"
              src={
                product?.images[0]
                  ? product?.images[0]?.url
                  : "/images/default_product.png"
              }
              alt={product?.name}
            />
          )}
        </div>
        <div className="card-body ps-3 d-flex justify-content-center flex-column">
          <h4 className="card-title text-center p-4">
            <Link to={`/product/${product?._id}`}>{product?.name}</Link>
          </h4>
          <div className="ratings mt-auto d-flex">
            <StarRatings
              rating={product?.ratings}
              starRatedColor="#ffb829"
              numberOfStars={5}
              name="rating"
              starDimension="22px"
              starSpacing="1px"
            />
            <span id="no_of_reviews" className="pt-2 ps-2">
              {" "}
              ({product?.numOfReviews})
            </span>
          </div>
          <p className="card-text mt-2">RM {product?.price}</p>
          <model-viewer
            src={product?.model.url}
            class={"d-block w-100"}
            style={{
              height: 40,
            }}
            alt="A 3D model"
            ar
            ar-modes="webxr quick-look scene-viewer ar"
            reveal="manual"
          >
            <button slot="ar-button" className={"btn btn-primary w-100"}>
              Activate AR
            </button>
          </model-viewer>
          <Link
            to={`/product/${product?._id}`}
            id="view_btn"
            className="btn btn-block"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
