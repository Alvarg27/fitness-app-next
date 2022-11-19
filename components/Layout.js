import Head from "next/head";
import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SlidingModal from "./SlidingModal";

const Layout = ({ children }) => {
  const { height } = useWindowDimensions();
  return (
    <div style={{ minHeight: height }} className="w-full flex bg-gray-100">
      <Head></Head>

      <div style={{ height }} className="w-full  m-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
