import React, { useEffect, useRef, useState } from "react";
import { FaAd, FaPlus, FaSearch } from "react-icons/fa";
import exercises from "../data.js/excersies";
import searchAlgorithm from "../helpers/searchAlgorithm";
import ExerciseSearchHitCard from "./ExerciseSearchHitCard";

const ExerciseSearchBar = ({ handleAddExercise }) => {
  const [dropdownHovered, setDropdownHovered] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [inputOnFocus, setInputOnFocus] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [hits, setHits] = useState(exercises);
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchInput.length < 1) {
      setHits(exercises);
      return;
    }
    const result = searchAlgorithm(searchInput, exercises);
    setHits(result);
  }, [searchInput]);

  const handleFocus = () => {
    setInputOnFocus(true);
  };

  const handleBlur = () => {
    setInputOnFocus(false);
    setSearchInput("");
  };

  useEffect(() => {
    if (inputOnFocus) {
      setDropdownOpen(true);
    }
    if (!inputOnFocus && !dropdownHovered) {
      setDropdownOpen(false);
    }
  }, [inputOnFocus]);

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        inputRef.current.blur();
        setDropdownOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
    <div onFocus={handleFocus} onBlur={handleBlur} className="relative mt-2">
      <div
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        <span className="bg-blue-100 inline-flex h-[22px] w-[22px] rounded-lg text-blue-500 text-xs mr-2">
          <FaPlus className="m-auto" />
        </span>
        <input
          ref={inputRef}
          type="text"
          value={searchInput}
          placeholder="Type new exercise name"
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-transparent"
        />
      </div>
      {dropdownOpen && (
        <div
          onMouseOver={() => setDropdownHovered(true)}
          onMouseOut={() => setDropdownHovered(false)}
          className="bg-white w-full absolute rounded-xl shadow-md top-8 z-[11]"
        >
          {hits.map((hit, i) => (
            <ExerciseSearchHitCard
              hit={hit}
              key={i}
              handleAddExercise={handleAddExercise}
              setDropdownOpen={setDropdownOpen}
            />
          ))}
          {hits.length < 1 && (
            <div className="p-2 h-[50px] flex text-gray-500">
              <FaSearch className="my-auto mr-2" />
              <p className="my-auto">No results found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExerciseSearchBar;
