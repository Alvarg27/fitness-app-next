import Head from "next/head";
import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SlidingModal from "./SlidingModal";

const Layout = ({ children }) => {
  const { height } = useWindowDimensions();
  return (
    <div style={{ height }} className="w-full flex">
      <Head></Head>

      <div style={{ height }} className="w-full  m-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
