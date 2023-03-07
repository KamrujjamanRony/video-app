import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../shared/Loading";
import Error from "./Error";
import VideoCard from "./VideoCard";

const VideoGrid = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchVideos())
  },[dispatch])
  const {videos, isLoading, isError, error} = useSelector(state=>state.videos);
  let content;
  if (isLoading) {
    content = <Loading />
  }
  if (!isLoading && isError) {
    content = <Error error={error} />
  }
  if (!isLoading && !isError && videos.length===0) {
    content = <div className="col-span-12">There are no videos</div>
  }
  if (!isLoading && !isError && videos.length>0) {
    content = videos.map(video=><VideoCard key={video.id} video={video} />)
  }
  return (
    <>
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {content}
          </div>
        </section>
      </section>
    </>
  );
};

export default VideoGrid;
