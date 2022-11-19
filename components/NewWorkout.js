import React from "react";
import ModuleCard from "./ModuleCard";

const NewWorkout = () => {
  return (
    <div className="max-w-[600px] flex flex-1 flex-col">
      <p className="p-4 text-2xl">Morning session</p>
      <ModuleCard />
    </div>
  );
};

export default NewWorkout;
