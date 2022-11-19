import Head from "next/head";
import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SlidingModal from "./SlidingModal";

const Layout = ({ children }) => {
  const { height } = useWindowDimensions();
  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <Head></Head>

      {children}
    </div>
  );
};

export default Layout;
