import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { Helmet } from "react-helmet-async";

export default function DonationCampaigns() {
  const donations = useLoaderData();
  return (
    <div className="">
      <Helmet>
        <title>Winter Donation | Campaigns</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl mt-20">
        Donation Campaigns
      </h2>
      <p className="text-gray-500 text-center lg:w-1/2 mx-auto">
        Join our donation campaigns to bring warmth and hope to those in need
        this winter.Your contribution to our campaigns helps us reach vulnerable
        communities and make a lasting impact.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-4/5">
        {donations.map((donation) => (
          <Card key={donation.id} donation={donation}></Card>
        ))}
      </div>
    </div>
  );
}
