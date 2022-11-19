import React, { useState } from "react";
import { FaPlus, FaPlusSquare } from "react-icons/fa";
import exercises from "../data.js/excersies";
import ExerciseCard from "./ExerciseCard";
import ExerciseSearchBar from "./ExerciseSearchBar";
import Toggle from "./Toggle";

const BlockCard = () => {
  const blockLetter = "A";
  const [superset, setSuperset] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [title, setTitle] = useState("");
  const [titleOnFocus, setTitleOnFocus] = useState(false);

  const handleAddExercise = (exercise) => {
    const newArr = [...selectedExercises];
    newArr.push(exercise);
    setSelectedExercises(newArr);
  };

  const handleRemoveExercise = (exerciseId) => {
    const index = selectedExercises
      .map(function (x) {
        return x._id;
      })
      .indexOf(exerciseId);
    const newArr = [...selectedExercises];
    newArr.splice(index, 1);
    setSelectedExercises(newArr);
  };
  return (
    <div className="border-[3px] border-gray-300 rounded-xl m-2  p-4 flex flex-col">
      <div className="flex justify-between">
        <div className="flex mb-2">
          <div className="bg-blue-500 flex w-[30px] h-[30px] rounded-full mr-2">
            <p className="m-auto text-white">A</p>
          </div>
          <input
            placeholder="Block title (Optional)"
            onFocus={() => {
              setTitleOnFocus(true);
            }}
            onBlur={() => {
              setTitleOnFocus(false);
            }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-transparent"
          />
        </div>
        {selectedExercises.length >= 2 && (
          <div className="my-auto flex">
            <p
              className={`text-sm mr-2 ${
                superset ? "text-black" : "text-gray-500"
              }`}
            >
              Superset
            </p>
            <Toggle enabled={superset} setEnabled={setSuperset} />
          </div>
        )}
      </div>
      <div>
        {selectedExercises.map((exercise, i) => (
          <ExerciseCard
            key={i}
            exercise={exercise}
            handleRemoveExercise={handleRemoveExercise}
            superset={superset}
            blockLetter="A"
            index={i}
          />
        ))}
      </div>

      <ExerciseSearchBar handleAddExercise={handleAddExercise} />
    </div>
  );
};

export default BlockCard;
