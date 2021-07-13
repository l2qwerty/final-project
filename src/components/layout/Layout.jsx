import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routes from "../../routes/Routes";

function Layout() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default Layout;
