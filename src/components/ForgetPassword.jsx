import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

export default function ForgetPassword() {
  const { passwordResetEmail } = useContext(authContext);
  const location = useLocation();
  const email = location?.state.email;
  const handleResetBtn = () => {
    passwordResetEmail(email)
      .then(() => {
        toast.success("password reset email sent");
        window.open("https://mail.google.com", "_blank");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <div className="card bg-base-100 w-full mt-20 mx-auto max-w-sm shrink-0 shadow-2xl">
      <Helmet>
        <title>Winter Donation | Forget</title>
      </Helmet>
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
