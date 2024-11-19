import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
export default function Register() {
  const { createUser, setUser, setLoading, updateUser, signInWithGoogle } =
    useContext(authContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");
    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      return setError("Password must contain at least one lowercase letter");
    }
    if (password.length < 6) {
      return setError("Password must contain at least 6 characters");
    }

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateUser({ displayName: name, photoURL: photo });
        e.target.reset();
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.code);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="mt-20">
      <Helmet>
        <title>Winter Donation | Register</title>
      </Helmet>
      <div className="text-center flex justify-center mb-3 items-center">
        <button
          onClick={() => signInWithGoogle(navigate)}
          className="border-2 rounded-full gap-3 w-80 text-center py-4 px-6 flex items-center justify-center text-xl"
        >
          <FaGoogle></FaGoogle>
          Sign Up With Google
        </button>
      </div>
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-2 mt-4">
          Registration
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
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
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <label className="input input-bordered flex  justify-between items-center gap-2">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="password"
                className=""
                required
              />
              <button onClick={() => setShow(!show)} type="button" className="">
                {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-500 text-white">Register</button>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <p className="text-center">
            Already have an account please{" "}
            <Link className="text-blue-500 font-bold" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
