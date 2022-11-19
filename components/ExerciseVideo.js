import React from "react";

const ExerciseVideo = ({ video, poster }) => {
  return (
    <div>
      <video
        className="m-auto cursor-pointer object-cover relative rounded-xl h-[100px] min-w-[80px] bg-gray-100"
        playsInline
        loop
        autoPlay={true}
        muted={true}
        poster={poster}
      >
        <source src={video} />
      </video>
    </div>
  );
};

export default ExerciseVideo;
