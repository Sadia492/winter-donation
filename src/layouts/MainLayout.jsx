import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainLayout() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing style
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="min-h-[calc(100vh-330px)]">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
}
