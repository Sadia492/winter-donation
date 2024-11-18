import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const { user, signOutUser } = useContext(authContext);
  const { pathname } = useLocation();

  const links = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/donation">
        <li>Donation Campaigns</li>
      </NavLink>
      <NavLink to="/help">
        <li>How to Help</li>
      </NavLink>
      <NavLink to="/dashboard">
        <li>Dashboard</li>
      </NavLink>
    </>
  );

  return (
    <div
      className={`${
        pathname === "/"
          ? "absolute top-0 left-0 w-full z-20 bg-opacity-0 bg-white"
          : ""
      }   text-blue-500 font-bold`}
    >
      <div className="navbar w-4/5 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-3xl">Winter Donation</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt="User"
              />
              <Link
                onClick={signOutUser}
                className="btn bg-blue-500 text-white"
              >
                Log out
              </Link>
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
