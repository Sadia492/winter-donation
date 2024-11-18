import React from "react";
import { useLocation } from "react-router-dom";

export default function ForgetPassword() {
  const location = useLocation();
  const email = location?.state.email;
  const handleResetBtn = () => {};
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            defaultValue={email}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button
            type="button"
            onClick={handleResetBtn}
            className="btn btn-primary"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
