/* eslint-disable react/prop-types */
import '../Styling/ReusableCarousel.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

export default function TrendingCarousel({ title,  data = [] }) {
  // Check if data is not an array or is empty
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="carousel-error">
        <p>No {title} anime available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="reusable-carousel-container" >
      <h2>{title}</h2>
    <Swiper
      className="reusable-carousel"
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        300: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        350: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      style={{ cursor: "grab" }}
    >
      {data.map((anime, index) => (
        <SwiperSlide key={index} className="reusable-carousel-item">
          <Link to={`/anime/${anime.id}`}>
            <img
              src={anime.image || "/path/to/default-image.jpg"} // Default image
              alt={
                anime.title?.english ||
                anime.title?.romaji ||
                anime.title?.userPreferred ||
                "Anime"
              }
              draggable="false"
              onError={(e) => (e.target.src = "/path/to/default-image.jpg")} // Fallback for broken images
            />
          </Link>
          <h4>
            {anime?.title?.english ||
              anime?.title?.romaji ||
              anime?.title?.userPreferred ||
              "Unknown Title"}
          </h4>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}