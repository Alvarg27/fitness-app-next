import React from "react";
import ExerciseCard from "./ExerciseCard";

const ModuleCard = () => {
  const module = [
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
  return (
    <div className="bg-blue-100 border-[2px] border-blue-500 rounded-xl m-2  p-4 flex flex-col">
      <div className="flex">
        <div className="bg-blue-500 flex w-[30px] h-[30px] rounded-full mr-2">
          <p className="m-auto text-white">A</p>
        </div>
        <p className="my-auto">Module</p>
      </div>
      {module.map((exercise, i) => (
        <ExerciseCard key={i} exercise={exercise} />
      ))}
    </div>
  );
};

export default ModuleCard;
