import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FaClock,
  FaDumbbell,
  FaPercentage,
  FaStopwatch,
  FaSync,
} from "react-icons/fa";

const ExerciseModalInput = ({
  value,
  setValue,
  label,
  icon,
  color,
  placeholder,
  type,
  percentage,
  maxLength,
}) => {
  const [strVal, setStrVal] = useState(placeholder ? placeholder : "0"); // To keep a reference of the real input value
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
    if (icon === "FaPercentage") {
      return <FaPercentage />;
    }
  };

  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const inputVal = Number(e.currentTarget.value);

    setValue(inputVal || 0);
  };

  useEffect(() => {
    if (value >= 1) {
      setStrVal(value.toString());
    } else {
      setStrVal("0");
    }
  }, [value]);
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
        <div className="flex my-auto relative">
          <input
            ref={inputRef}
            value={value === 0 ? strVal : strVal.replace(/\b0+/g, "")}
            onChange={handleInputChange}
            className={`text-blue-500 bg-transparent  flex flex-1`}
            placeholder={placeholder}
            required
            style={{
              minWidth: 10,
              width: value.toString().length * 10,
            }}
            type="number"
          />
          {type === "time" && <p className="text-blue-500">min</p>}
          {percentage && <p className="text-blue-500">%</p>}
        </div>
        {false && (
          <select
            value={value?.unit}
            onChange={(e) => {
              setValue((prev) => ({ ...prev, unit: e.target.value }));
            }}
            className="bg-transparent"
          >
            <option value="min">min</option>
            <option value="sec">sec</option>
          </select>
        )}
      </div>
      <div
        onClick={() => setValue(0)}
        className="my-auto px-2 py-1 transition duration-300 text-gray-500 hover:bg-gray-200 hover:text-rose-400 rounded-md"
      >
        <p className="text-sm m-auto">Reset</p>
      </div>
    </div>
  );
};

export default ExerciseModalInput;
