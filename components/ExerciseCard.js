import React, { useState } from "react";
import ExerciseVideo from "./ExerciseVideo";
import {
  FaBeer,
  FaClock,
  FaDumbbell,
  FaPlus,
  FaReply,
  FaStopwatch,
  FaSync,
  FaTrash,
} from "react-icons/fa";
import ExerciseModal from "./ExerciseModal";

const ExerciseCard = ({
  exercise,
  superset,
  parent,
  index,
  handleRemoveExercise,
  blockLetter,
  handleAddExerciseOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ExerciseModal
        exerciseId={exercise._id}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleAddExerciseOptions={handleAddExerciseOptions}
        index={index}
      />
      <div
        onClick={() => setIsOpen(true)}
        className="bg-white shadow-md rounded-2xl my-1 flex relative cursor-pointer"
      >
        {superset && index !== 0 && (
          <div className="bg-blue-500 h-[40px] absolute px-4 left-1/2 -translate-x-1/2 -top-[20px] rounded-full z-10 flex text-white shadow-md">
            <div className="flex">
              <FaSync className="my-auto mr-2" />
              <p className="my-auto">Superset</p>
            </div>
          </div>
        )}
        {superset && (
          <div className="bg-blue-500 min-h-full w-[40px] rounded-l-lg flex text-white">
            <p className="m-auto">{blockLetter + (index + 1)}</p>
          </div>
        )}

        <div className="flex  p-2 flex-1 justify-between">
          <div className="flex">
            <ExerciseVideo video={exercise.video} poster={exercise.poster} />
            <div className="my-auto ml-4 ">
              <p className="font-medium">{exercise.title}</p>
              {!exercise?.options && (
                <div className="bg-gray-100 flex text-sm py-1 px-1 rounded-lg">
                  <span className="bg-blue-100 inline-flex h-5 w-5 rounded-lg text-blue-500 text-xs mr-2">
                    <FaPlus className="m-auto" />
                  </span>
                  <p className="my-auto text-gray-500 text-xs">Options</p>
                </div>
              )}
              <div className="mt-1">
                {exercise?.options?.reps && (
                  <div className="inline-flex text-xs bg-emerald-100 justify-center text-emerald-500 rounded-lg py-1 px-2 mx-1">
                    <FaDumbbell className="my-auto mr-1" />
                    <p className="my-auto">{exercise.options.reps} reps</p>
                  </div>
                )}
                {exercise?.options?.time && (
                  <div className="inline-flex text-xs bg-indigo-100 justify-center text-indigo-500 rounded-lg py-1 px-2 mx-1">
                    <FaStopwatch className="my-auto mr-1" />
                    <p className="my-auto">{exercise.options.time} min</p>
                  </div>
                )}
                {exercise?.options?.sets && (
                  <div className="inline-flex text-xs bg-blue-100 justify-center text-blue-500 rounded-lg py-1 px-2 mx-1">
                    <FaSync className="my-auto mr-1" />
                    <p className="my-auto">{exercise.options.sets} sets</p>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {exercise?.options?.notes}
              </p>
            </div>
          </div>
          <div
            onClick={() => handleRemoveExercise(index)}
            className="h-8 w-8  flex my-auto rounded-full hover:bg-gray-100"
          >
            <FaTrash className="m-auto text-gray-500 text-sm cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseCard;
