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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-4/5">
        {donations.map((donation) => (
          <Card key={donation.id} donation={donation}></Card>
        ))}
      </div>
    </div>
  );
}
