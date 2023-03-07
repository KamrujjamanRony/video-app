import React from "react";
import Pagination from "../components/shared/Pagination";
import Tags from "../components/tags/Tags";
import VideoGrid from "../components/videoGrid/VideoGrid";

const Home = () => {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;
