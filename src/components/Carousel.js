import React from "react";
import img1 from "./images/mug-g26f466aae_1280.jpg";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner " id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success "
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div
            className="carousel-item active image-wrapper"
            style={{ height: "500px" }}
          >
            <img
              src={img1}
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="Burger"
            />
          </div>
          <div
            className="carousel-item image-wrapper"
            style={{ height: "500px" }}
          >
            <img
              src={img1}
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="Pasta"
            />
          </div>
          <div
            className="carousel-item image-wrapper"
            style={{ height: "500px" }}
          >
            <img
              src={img1}
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="Cake"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
