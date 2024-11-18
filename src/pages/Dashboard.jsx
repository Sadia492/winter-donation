import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(authContext);
  return (
    <div className="bg-[url('https://i.ibb.co.com/G7dvRjb/cool-background.png')] bg-no-repeat bg-cover text-white py-12">
      <div></div>
      <h2 className="text-center text-3xl font-bold my-8">
        Welcome {user?.displayName}
      </h2>

      <div className="flex justify-between items-center w-4/5 mx-auto">
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
