import React, { useEffect, useState } from "react";
import { FaPlus, FaPlusSquare, FaTrash } from "react-icons/fa";
import exercises from "../data.js/exercises";
import BlockModal from "./BlockModal";
import ExerciseCard from "./ExerciseCard";
import ExerciseSearchBar from "./ExerciseSearchBar";
import Toggle from "./Toggle";

const BlockCard = ({ block, index, handleRemoveBlock, blocks }) => {
  const blockLetter = block._id.toUpperCase();
  const [blockModalOpen, setBlockModalOpen] = useState(false);
  const [superset, setSuperset] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [title, setTitle] = useState("");
  const [placeholderTitle, setPlaceholderTitle] = useState(
    "Block title (optional)"
  );
  const [titleOnFocus, setTitleOnFocus] = useState(false);

  const handleAddExercise = (exerciseId) => {
    const result = exercises.find((ex) => ex._id === exerciseId);
    const newObject = {
      _id: blockLetter + (selectedExercises.length + 1),
      title: result.title,
      video: result.video,
      poster: result.poster,
    };
    const newArr = [...selectedExercises];
    newArr.push(newObject);
    setSelectedExercises(newArr);
  };

  const handleRemoveExercise = (index) => {
    const newArr = [...selectedExercises];
    newArr.splice(index, 1);
    setSelectedExercises(newArr);
  };

  const handleAddExerciseOptions = (index, options) => {
    const newArr = [...selectedExercises];
    newArr[index].options = options;
    setSelectedExercises(newArr);
  };

  useEffect(() => {
    if (selectedExercises.length === 0) {
      setPlaceholderTitle("Block title (optional)");
    }
    if (selectedExercises.length === 1) {
      setPlaceholderTitle(selectedExercises[0].title + " block");
    }
    if (selectedExercises.length >= 2) {
      setPlaceholderTitle("Circuit block");
    }
    if (selectedExercises.length >= 2 && superset) {
      setPlaceholderTitle("Superset block");
    }
  }, [selectedExercises, superset]);
  return (
    <>
      <BlockModal
        blockId={block._id}
        isOpen={blockModalOpen}
        setIsOpen={setBlockModalOpen}
        index={index}
      />
      <div className="border-[3px] border-gray-300 rounded-xl m-2  p-4 flex flex-col">
        <div className="flex justify-between">
          <div className="flex mb-2">
            <div className="bg-blue-500 flex w-[30px] h-[30px] rounded-full mr-2">
              <p className="m-auto text-white">{blockLetter}</p>
            </div>
            <input
              placeholder={placeholderTitle}
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

          <div className="flex">
            {selectedExercises.length >= 2 && (
              <div className="my-auto flex mr-2">
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

            {blocks.length > 1 && (
              <div
                onClick={() => handleRemoveBlock(index)}
                className="h-8 w-8  flex my-auto rounded-full hover:bg-gray-200"
              >
                <FaTrash className="m-auto text-gray-500 text-sm cursor-pointer" />
              </div>
            )}
          </div>
        </div>
        <div>
          <div
            onClick={() => setBlockModalOpen(true)}
            className="bg-gray-200 inline-flex text-sm py-1 px-1 rounded-lg cursor-pointer"
          >
            <span className="bg-blue-200 inline-flex h-5 w-5 rounded-lg text-blue-500 text-xs mr-2">
              <FaPlus className="m-auto" />
            </span>
            <p className="my-auto text-gray-500 text-xs">Block Options</p>
          </div>
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
              handleAddExerciseOptions={handleAddExerciseOptions}
            />
          ))}
        </div>

        <ExerciseSearchBar handleAddExercise={handleAddExercise} />
      </div>
    </>
  );
};

export default BlockCard;
