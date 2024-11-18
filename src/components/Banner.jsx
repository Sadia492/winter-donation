import React from "react";
import Slider from "react-slick";
import "../index.css";

export default function Banner() {
  // Settings for the slick slider
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000, // Slide every 2 seconds
    infinite: true,
    dots: true, // Show navigation dots
    arrows: false, // Disable arrow navigation
    fade: true, // Enable fade transition for a smoother effect
    speed: 1000, // Transition speed
  };

  // Slider data: Array of background images and text for each slide
  const slides = [
    {
      background:
        "https://i.ibb.co.com/s28ZYVB/DALL-E-2024-11-18-13-37-34-A-heartwarming-illustration-of-a-winter-donation-drive-set-in-a-light-fro.webp", // Corrected URL
      text: "Welcome to Winter Clothing Donation",
      textColor: "text-blue-500",
    },
    {
      background:
        "https://i.ibb.co.com/Qk0gWCq/pexels-jill-wellington-1638660-327131.jpg", // Corrected URL
      text: "Help those in need stay warm this winter",
      textColor: "text-blue-500",
    },
    {
      background: "https://i.ibb.co.com/SQcndrV/ice-1997289-1280.jpg", // Corrected URL
      text: "Your donation can make a difference",
      textColor: "text-blue-500",
    },
  ];

  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="w-full relative">
              <img
                className="w-full h-[600px] object-cover object-center"
                src={slide.background}
                alt=""
              />
              {/* Absolute positioning for text to center it */}
              <h2
                className={`absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold   ${slide.textColor}  z-10`}
              >
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
