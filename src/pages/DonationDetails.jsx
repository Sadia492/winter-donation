import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function DonationDetails() {
  const [singleDonation, setSingleDonation] = useState({});
  const donations = useLoaderData();
  const { detailsId } = useParams();
  console.log(detailsId);
  console.log(donations);
  useEffect(() => {
    const donation = donations.find((donation) => donation.id == detailsId);
    if (donation) {
      setSingleDonation(donation);
    }
  }, [donations, detailsId]);
  const { title, image, description, division, id, contactInfo, status } =
    singleDonation || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you ! We will reach your destination soon", {
      position: "top-center",
    });
    e.target.reset();
  };

  return (
    <div className="w-4/5 mx-auto mt-20">
      <Helmet>
        <title>Winter Donation | Details</title>
      </Helmet>
      <div className="flex flex-col items-center md:flex-row gap-6 my-8">
        <div className="flex-1">
          <img className="rounded-xl" src={image} alt="" />
        </div>
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="text-xl ">{description}</p>
          <p>Division: {division}</p>
          <p>Contact Information: {contactInfo}</p>
          <p className="text-green-500">Status: {status}</p>
        </div>
      </div>
      <div className="bg-base-100 w-full mx-auto shadow-2xl p-8 rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity of items</span>
            </label>
            <input
              type="text"
              placeholder="Quantity of items"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Item type</span>
            </label>
            <input
              type="text"
              placeholder="Item type"
              className="input input-bordered"
              required
            />
          </div>
          <div className="md:col-span-2 form-control">
            <label className="label">
              <span className="label-text">Pickup location</span>
            </label>
            <input
              type="text"
              placeholder="Pickup location"
              className="input input-bordered"
              required
            />
          </div>
          <div className="md:col-span-2 form-control">
            <label className="label">
              <span className="label-text">
                Additional notes <span className="text-red-500">Optional</span>
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Additional Notes"
            ></textarea>
          </div>
          <div className="form-control md:col-span-2 mt-6">
            <button className="btn bg-blue-500 text-white">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
