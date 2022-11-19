import React from "react";
import ExerciseVideo from "./ExerciseVideo";
import { FaBeer, FaClock, FaDumbbell, FaReply, FaSync } from "react-icons/fa";

const ExerciseCard = ({ exercise, superset, parent, index }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl my-1 flex relative">
      {superset && index === 0 && (
        <div className="bg-blue-500 h-[40px] absolute px-4 left-1/2 -translate-x-1/2 -bottom-[25px] rounded-full z-10 flex text-white shadow-md">
          <div className="flex">
            <FaSync className="my-auto mr-2" />
            <p className="my-auto">Superset</p>
          </div>
        </div>
      )}
      {superset && (
        <div className="bg-blue-500 min-h-full w-[40px] rounded-l-lg flex text-white">
          <p className="m-auto">{parent + (index + 1)}</p>
        </div>
      )}

      <div className="flex  p-2 ">
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
