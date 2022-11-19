import Image from "next/image";
import React, { useState } from "react";

const ExerciseSearchHitCard = ({ hit, handleAddExercise, setDropdownOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onClick={() => {
        setDropdownOpen(false);
        handleAddExercise(hit);
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className="flex m-2 hover:bg-blue-100 transition duration-300 rounded-lg cursor-pointer"
    >
      <div className="aspect-square h-[50px] w-[50px] relative my-auto mr-4 cursor-pointer">
        <Image
          src={hit.poster}
          fill={true}
          className="object-cover rounded-lg"
          alt=""
        />
      </div>
      <p
        className={`my-auto font-medium transition duration-300 ${
          isHovered ? "text-blue-500" : ""
        }`}
      >
        {hit.title}
      </p>
    </div>
  );
};

export default ExerciseSearchHitCard;
