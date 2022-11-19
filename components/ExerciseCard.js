import React from "react";
import ExerciseVideo from "./ExerciseVideo";
import { FaBeer, FaClock, FaDumbbell, FaReply, FaSync } from "react-icons/fa";

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl my-1 p-2">
      <div className="flex">
        <ExerciseVideo video={exercise.video} />
        <div className="my-auto ml-4 ">
          <p className="font-medium">{exercise.title}</p>
          <div className="mt-1">
            {exercise.reps && (
              <div className="inline-flex text-xs bg-emerald-100 justify-center text-emerald-500 rounded-lg py-1 px-2 mr-2">
                <FaDumbbell className="my-auto mr-1" />
                <p className="my-auto">{exercise.reps} reps</p>
              </div>
            )}
            {exercise.time && (
              <div className="inline-flex text-xs bg-indigo-100 justify-center text-indigo-500 rounded-lg py-1 px-2">
                <FaClock className="my-auto mr-1" />
                <p className="my-auto">{exercise.time} min</p>
              </div>
            )}
            {exercise.sets && (
              <div className="inline-flex text-xs bg-blue-100 justify-center text-blue-500 rounded-lg py-1 px-2">
                <FaSync className="my-auto mr-1" />
                <p className="my-auto">{exercise.sets} sets</p>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">{exercise.note}</p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
