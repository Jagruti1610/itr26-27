import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
function Layout() {
  return (
    <>
      
      <main>
         <Navbar/>
          <Outlet />
        <Footer />
      </main>

    </>
  );
}

export default Layout;