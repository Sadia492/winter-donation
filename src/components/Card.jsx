import React from "react";
import { Link } from "react-router-dom";

export default function Card({ donation }) {
  const { title, image, description, division, id } = donation;
  return (
    <div>
      <div className="card bg-base-100 rounded-xl h-full shadow-xl">
        <figure className="px-8 pt-8 h-50">
          <img className="h-50 rounded-xl" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline border-blue-500 p-4">
              Division: {division}
            </div>
          </div>
          <Link to={`/details/${id}`} className="btn bg-blue-500 text-white">
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
}
