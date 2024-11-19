import React, { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animations/animation.json";
import Aos from "aos";
import "aos/dist/aos.css";
export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="md:w-4/5 w-11/12 mx-auto" data-aos="fade-up">
      <h2 className="text-center font-bold text-3xl mt-12 mb-3">About Us</h2>
      <p className="text-center text-gray-500 mb-6">
        The "About Us" section shares the mission and values of our
        organization, highlighting our commitment to making a positive impact in
        the community. It provides insight into our goals and the team behind
        the initiative, ensuring transparency and trust with our supporters.
      </p>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-8">
        <div className="font-semibold text-xl space-y-6">
          <p>
            Our Winter Clothing Donation website is dedicated to providing
            warmth and comfort to those in need across Bangladesh. As the
            temperature drops, many vulnerable individuals, particularly in
            rural and low-income areas, face the harsh reality of not having
            enough winter clothing. Our platform aims to bridge this gap by
            connecting generous donors with dedicated volunteers who help
            distribute the clothing to those who need it most.
          </p>
          <p>
            Through our simple and easy-to-use web application, users can browse
            donation campaigns, learn about the impact they will make, and
            easily contribute by filling out a donation form. Together, we can
            ensure that no one has to endure the cold without the warmth of
            winter clothing.
          </p>
          <p>
            Our mission is to create a community of compassionate individuals
            who can come together to make a meaningful difference. By providing
            a user-friendly platform, we make it easy for people to contribute
            to those in need, whether it's donating gently used winter clothing
            or volunteering to help distribute donations.
          </p>
        </div>
        <div className="flex-1 bg-[#c5eaf0]">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </div>
  );
}
