import Image from "next/image";
import React, { useState } from "react";
import { FaDumbbell } from "react-icons/fa";

const ExerciseSearchHitCard = ({
  hit,
  handleAddExercise,
  setDropdownOpen,
  setSearchInput,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onClick={() => {
        setDropdownOpen(false);
        setSearchInput("");
        handleAddExercise(hit._id);
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className="flex m-2 hover:bg-blue-100 transition duration-300 rounded-lg cursor-pointer justify-between"
    >
      <div className="flex">
        <div className="aspect-square h-[40px] w-[40px] relative my-auto mr-4 cursor-pointer  rounded-lg bg-gray-200">
          {hit.poster && (
            <Image
              src={hit.poster}
              fill={true}
              className="object-cover rounded-lg"
              alt=""
            />
          )}
          {!hit.poster && (
            <div className="w-full h-full flex">
              <FaDumbbell className="m-auto text-gray-300 text-xl" />
            </div>
          )}
        </div>

        <p
          className={`my-auto font-medium text-xs transition duration-300 ${
            isHovered ? "text-blue-500" : ""
          }`}
        >
          {hit.name}
        </p>
      </div>
      <div className="flex">
        <p
          className={`inline-flex h-auto my-auto px-2 py-1 text-xs rounded-lg justify-center items-center bg-gray-200 text-gray-500 mr-1`}
        >
          {hit.category}
        </p>
        <p
          className={`inline-flex h-auto my-auto px-2 py-1 text-xs rounded-lg justify-center items-center ${
            hit.force === "push"
              ? "bg-indigo-100 text-indigo-500"
              : "bg-blue-100 text-blue-500"
          }`}
        >
          {hit.force}
        </p>
      </div>
    </div>
  );
};

export default ExerciseSearchHitCard;
