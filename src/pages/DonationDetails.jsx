import React, { useEffect, useState } from "react";
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
    <div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="my-8">
          <img className="w-4/5 h-[500px] mx-auto" src={image} alt="" />
        </div>
        <p className="text-xl ">{description}</p>
        <p>{division}</p>
        <p>{contactInfo}</p>
        <p className="text-green-500">{status}</p>
      </div>
      <div className="bg-base-100 w-full mx-auto shadow-2xl p-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
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
          <div className="col-span-2 form-control">
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
          <div className="col-span-2 form-control">
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
          <div className="form-control col-span-2 mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
