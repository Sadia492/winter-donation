import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div>
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="min-h-[calc(100vh-334px)] ">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
}
