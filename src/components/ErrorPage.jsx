import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <h2 className="font-extrabold text-5xl text-center">404</h2>
      <p className="text-2xl font-bold text-center">Page not found</p>
      <Link to="/" className="btn">
        Go to Home
      </Link>
    </div>
  );
}
