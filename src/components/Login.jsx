import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Login() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const { signInUser, setUser, signInWithGoogle } = useContext(authContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
    e.target.reset();
  };
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (email) {
      navigate("/forget-password", { state: { email } });
    } else {
      toast.error("Please enter an email address.");
    }
  };
  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-center font-bold text-2xl mt-4">Login</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="email"
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
            <label className="label">
              <button
                type="button"
                onClick={handleForgetPassword}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </button>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-center">
            Dont't have an account please{" "}
            <Link className="text-blue-700" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
      <button
        onClick={() => signInWithGoogle(navigate)}
        className="block mx-auto btn"
      >
        Sign In With Google
      </button>
    </div>
  );
}
