import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Dashboard() {
  const { user } = useContext(authContext);
  return (
    <div className="bg-[url('https://i.ibb.co.com/G7dvRjb/cool-background.png')] bg-no-repeat bg-cover pt-16 pb-20 text-white">
      <Helmet>
        <title>Winter Donation | Dashboard</title>
      </Helmet>
      <h2 className="text-center text-3xl font-bold mb-8">
        Welcome {user?.displayName}
      </h2>

      <div className="flex flex-col md:flex-row gap-2 justify-between items-center md:w-4/5 w-11/12 mx-auto">
        <div>
          <img
            className="w-40 h-40 rounded-full object-top object-cover"
            src={user?.photoURL}
            alt=""
          />
        </div>
        <div className="text-center">
          <h5 className="text-xl font-bold">Name: {user?.displayName}</h5>
          <h5 className="text-xl font-bold">Email: {user?.email}</h5>
        </div>
        <div>
          <Link to="/update-profile" className="btn">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
}
