import React, { useRef } from "react";
import { FaClock, FaDumbbell, FaStopwatch, FaSync } from "react-icons/fa";

const ExerciseModalInput = ({
  value,
  setValue,
  label,
  icon,
  color,
  placeholder,
}) => {
  const bgColor = `bg-${color}-100`;
  const textColor = `text-${color}-500`;
  const renderIcon = () => {
    if (icon === "FaDumbbell") {
      return <FaDumbbell />;
    }
    if (icon === "FaStopwatch") {
      return <FaStopwatch />;
    }
    if (icon === "FaClock") {
      return <FaClock />;
    }
    if (icon === "FaSync") {
      return <FaSync />;
    }
  };

  const inputRef = useRef(null);
  return (
    <div
      onClick={() => {
        inputRef.current.focus();
      }}
      className="flex my-2 px-2 rounded-xl hover:bg-gray-100 cursor-pointer justify-between"
    >
      <div className="flex my-2">
        <div className="flex mr-2">
          <div
            className={`${bgColor} ${textColor} inline-flex w-6 h-6 rounded-lg  my-auto mr-2 justify-center items-center`}
          >
            {renderIcon()}
          </div>
          <label className="text-sm font-medium my-auto">{label}</label>
        </div>
        <div className="flex my-auto">
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={8}
            className="text-blue-500 bg-transparent w-[70px]"
            placeholder={placeholder}
          />
        </div>
      </div>
      <div
        onClick={() => setValue("")}
        className="my-auto px-2 py-1 transition duration-300 text-gray-500 hover:bg-gray-200 hover:text-rose-400 rounded-md"
      >
        <p className="text-sm m-auto">Reset</p>
      </div>
    </div>
  );
};

export default ExerciseModalInput;
