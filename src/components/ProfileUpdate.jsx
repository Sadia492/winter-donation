import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ProfileUpdate() {
  const { updateUser, setLoading } = useContext(authContext);
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        console.log("user updated");
        navigate("/dashboard");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="card bg-base-100 mt-20 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <Helmet>
        <title>Winter Donation | Update</title>
      </Helmet>
      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="photo url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-500 text-white">
            Update Information
          </button>
        </div>
      </form>
    </div>
  );
}
