import React from "react";
import Header from "../Header_footer/Header";
import Home from "../Pages/Home";

function RootLayout() {
  return (
    <>
      <Header />
    <div className="">
{/* navbar */}
      <Home />
    </div>
    </>
  );
}

export default RootLayout;
