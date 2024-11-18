import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(authContext);
  return (
    <div>
      <h2 className="text-center text-2xl font-bold">
        Welcome {user?.displayName}
      </h2>
      <img className="w-96 h-60" src={user?.photoURL} alt="" />
      <h5>Name: {user?.displayName}</h5>
      <h5>Email: {user?.email}</h5>
      <Link to="/update-profile" className="btn">
        Update
      </Link>
    </div>
  );
}
