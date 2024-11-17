import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <HowItWorks></HowItWorks>
    </div>
  );
}
