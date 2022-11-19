import React from "react";
import { FaPlus, FaPlusSquare } from "react-icons/fa";
import ExerciseCard from "./ExerciseCard";

const ModuleCard = () => {
  const modules = [
    { _id: "01", title: "Row", video: "/row.mp4", time: 20 },
    {
      _id: "02",
      title: "Box jump",
      video: "/box-jump.mp4",
      reps: "15 - 20",
      sets: 3,
    },
    {
      _id: "03",
      title: "Echo bike",
      video: "/bicycle.mp4",
      time: 20,
      note: "at low speed",
    },
    { _id: "04", title: "Battle rope", video: "/rope.mp4", time: 20 },
  ];
  const modules2 = [
    {
      _id: "02",
      title: "Box jump",
      video: "/box-jump.mp4",
      reps: "15 - 20",
      sets: 3,
    },

    { _id: "04", title: "Battle rope", video: "/rope.mp4", time: 20 },
  ];
  return (
    <div>
      <div className="border-[3px] border-gray-300 rounded-xl m-2  p-4 flex flex-col">
        <div className="flex mb-2">
          <div className="bg-blue-500 flex w-[30px] h-[30px] rounded-full mr-2">
            <p className="m-auto text-white">A</p>
          </div>
          <p className="my-auto">Movilidad</p>
        </div>
        <div>
          {modules.map((exercise, i) => (
            <ExerciseCard key={i} exercise={exercise} />
          ))}
        </div>
        <button className="flex bg-gray-200 text-blue-500 justify-center h-[50px] rounded-xl mt-4">
          <FaPlus className="my-auto mr-2" />
          <p className="my-auto">Add exercise</p>
        </button>
      </div>
      <div className="border-[3px] border-gray-300 rounded-xl m-2  p-4 flex flex-col">
        <div className="flex mb-2">
          <div className="bg-blue-500 flex w-[30px] h-[30px] rounded-full mr-2">
            <p className="m-auto text-white">B</p>
          </div>
          <p className="my-auto">Fuerza</p>
        </div>
        <div>
          {modules2.map((exercise, i) => (
            <ExerciseCard
              key={i}
              exercise={exercise}
              index={i}
              superset={true}
              parent="B"
            />
          ))}
        </div>
        <button className="flex bg-gray-200 text-blue-500 justify-center h-[50px] rounded-xl mt-4">
          <FaPlus className="my-auto mr-2" />
          <p className="my-auto">Add exercise</p>
        </button>
      </div>
    </div>
  );
};

export default ModuleCard;
