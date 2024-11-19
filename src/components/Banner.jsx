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
      description:
        "Our Winter Clothing Donation website is dedicated to providing warmth and comfort to those in need across Bangladesh. ",
      textColor: "text-blue-500",
    },
    {
      background:
        "https://i.ibb.co.com/3SfXzNV/pexels-julia-m-cameron-6994938.jpg", // Corrected URL
      text: "Winter Clothing for Dhaka City",
      description:
        "This campaign is dedicated to providing winter clothing for low-income families in Dhaka city. We are collecting coats, sweaters, and blankets to help vulnerable individuals survive the cold winter months.",
      textColor: "text-blue-500",
    },
    {
      background:
        "https://i.ibb.co.com/Y3HXbXb/istockphoto-1388517849-612x612.jpg", // Corrected URL
      text: "Khulna: Warm Clothes for Villagers",
      description:
        "This campaign is focused on providing winter clothing to the rural villages of Khulna. Many people here live below the poverty line and are in urgent need of warm clothing during the winter.",
      textColor: "text-blue-500",
    },
    {
      background:
        "https://i.ibb.co.com/Qk0gWCq/pexels-jill-wellington-1638660-327131.jpg", // Corrected URL
      text: "Your donation can make a difference",
      description:
        "Your donation can bring warmth and hope to those in need, ensuring no one faces the harsh winter alone. Together, we can make a meaningful difference in their lives.",
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
              <div
                className={`absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2     ${slide.textColor}  z-10`}
              >
                <h2 className="text-5xl font-bold mb-2">{slide.text}</h2>
                <p className="text-xl font-medium">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
