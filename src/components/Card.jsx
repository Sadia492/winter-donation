import React from "react";

export default function Card({ donation }) {
  const { title, image, description, division } = donation;
  return (
    <div>
      <div className="card bg-base-100 h-full shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline p-4">{division}</div>
          </div>
          <button className="btn">Donate Now</button>
        </div>
      </div>
    </div>
  );
}
