import React from "react";
import {
  FaClock,
  FaDumbbell,
  FaPercentage,
  FaStopwatch,
  FaSync,
} from "react-icons/fa";

const BlockTag = ({ block, name, time, defaultValue, label, color, icon }) => {
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
  return (
    <div>
      {block?.options && block?.options[name] > defaultValue && (
        <div
          className={`inline-flex text-xs  justify-center rounded-lg py-1 px-2 m-1 ${bgColor} ${textColor}`}
        >
          <div className="my-auto mr-1">{renderIcon()}</div>
          <p className="my-auto">
            {block.options[name]}
            {time ? "min" : ""}
            {label ? " " + label : ""}
          </p>
        </div>
      )}
    </div>
  );
};

export default BlockTag;
