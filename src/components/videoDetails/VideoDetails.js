import React from "react";
import Description from "./Description";
import Player from "./Player";

const VideoDetails = ({video}) => {
  const {id, title, link} = video || {};
  return (
    <>
      <div className="col-span-full w-full space-y-8 lg:col-span-2">
        <Player key={id} title={title} link={link} />
        <Description key={id} video={video} />
      </div>
    </>
  );
};

export default VideoDetails;
