import React, { useState } from "react";
import BlockCard from "./BlockCard";

const NewWorkout = () => {
  const [title, setTitle] = useState("");
  const [titleOnFocus, setTitleOnFocus] = useState(false);
  return (
    <div className="max-w-[600px] flex flex-1 flex-col">
      <input
        placeholder="Workout title (Optional)"
        onFocus={() => {
          setTitleOnFocus(true);
        }}
        onBlur={() => {
          setTitleOnFocus(false);
        }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-transparent text-2xl p-4"
      />
      <BlockCard />
    </div>
  );
};

export default NewWorkout;
