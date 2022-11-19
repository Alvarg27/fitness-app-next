import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import NewWorkout from "../components/NewWorkout";
import SlidingModal from "../components/SlidingModal";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-1">
      <NewWorkout />
    </div>
  );
}
