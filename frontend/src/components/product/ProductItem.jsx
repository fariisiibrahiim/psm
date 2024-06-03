import React from "react";
import { Link } from "react-router-dom";

import StarRatings from "react-star-ratings";
import "@google/model-viewer";

const ProductItem = ({ product, columnSize }) => {
  return (
    <div
      className={`col-sm-12 col-md-6 col-lg-${columnSize} my-3`}
      style={{ minWidth: 330 }}
    >
      <div className="card p-3 rounded">
        {product?.model ? (
          <model-viewer
            style={{ maxWidth: 272 }}
            src={product?.model.url}
            alt="A 3D model"
            camera-controls
            // ar
            ar-modes="webxr quick-look scene-viewer ar"
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
        <div className="card-body ps-3 d-flex justify-content-center flex-column">
          <h5 className="card-title">
            <Link to={`/product/${product?._id}`}>{product?.name}</Link>
          </h5>
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
            style={{
              height: 40,
            }}
            alt="A 3D model"
            ar
            ar-modes="webxr quick-look scene-viewer ar"
            reveal="manual"
          >
            <button slot="ar-button" class={"btn btn-primary w-75"}>
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
