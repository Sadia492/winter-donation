import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import HowYouCanHelp from "../components/HowCanYouHelp";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div className="space-y-16">
      <Helmet>
        <title>Winter Donation | Home</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <HowItWorks></HowItWorks>
      <HowYouCanHelp></HowYouCanHelp>
      <FAQ></FAQ>
    </div>
  );
}
