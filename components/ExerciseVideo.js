import React from "react";

const ExerciseVideo = ({ video }) => {
  return (
    <div>
      <video
        onClick={() => handleVideoPress()}
        className="m-auto cursor-pointer object-cover relative rounded-xl h-[100px] w-[80px]"
        playsInline
        loop
        autoPlay={true}
        muted={true}
      >
        <source src={video} />
      </video>
    </div>
  );
};

export default ExerciseVideo;
