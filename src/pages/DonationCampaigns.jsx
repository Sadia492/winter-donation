import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

export default function DonationCampaigns() {
  const donations = useLoaderData();

  return (
    <div>
      <h2 className="text-center font-bold text-2xl">Donation Campaigns</h2>
      <div className="grid grid-cols-3 gap-6">
        {donations.map((donation) => (
          <Card key={donation.id} donation={donation}></Card>
        ))}
      </div>
    </div>
  );
}
