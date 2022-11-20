import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import BlockCard from "./BlockCard";

const NewWorkout = () => {
  const [title, setTitle] = useState("");
  const [titleOnFocus, setTitleOnFocus] = useState(false);
  const [blocks, setBlocks] = useState([
    {
      _id: String.fromCharCode(96 + 1),
      title: "",
      setSelectedExercises: [],
      superset: false,
    },
  ]);

  const handleAddNewBlock = () => {
    const newObj = {
      _id: String.fromCharCode(96 + (blocks.length + 1)),
      title: "",
      setSelectedExercises: [],
      superset: false,
    };
    const newArr = [...blocks];
    newArr.push(newObj);
    setBlocks(newArr);
  };

  const handleRemoveBlock = (index) => {
    const newArr = [...blocks];
    newArr.splice(index, 1);
    setBlocks(newArr);
  };

  return (
    <div className="max-w-[600px] flex flex-1 flex-col pb-8">
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
      {blocks.map((b, i) => (
        <BlockCard
          key={i}
          block={b}
          handleRemoveBlock={handleRemoveBlock}
          blocks={blocks}
        />
      ))}
      <div className="w-full flex justify-center">
        <button
          onClick={handleAddNewBlock}
          className="bg-blue-100 inline-flex justify-center items-center text-blue-500 px-8 rounded-lg py-2"
        >
          <FaPlus className="mr-2" />
          <p>Add new block</p>
        </button>
      </div>
    </div>
  );
};

export default NewWorkout;
