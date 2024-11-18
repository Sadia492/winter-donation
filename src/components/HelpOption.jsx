import React from "react";

export const HelpOption = ({ icon, title, description, link }) => {
  return (
    <div className=" w-full bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl p-6 text-center">
      <div className="text-4xl text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <a href={link} className="text-blue-600 hover:underline">
        Learn More
      </a>
    </div>
  );
};
