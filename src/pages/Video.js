import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedVideos from "../components/relatedVideos/RelatedVideos";
import Loading from "../components/shared/Loading";
import VideoDetails from "../components/videoDetails/VideoDetails";
import Error from "../components/videoGrid/Error";
import { fetchVideo } from "../features/video/videoSlice";

const Video = () => {
  const dispatch = useDispatch();
  const {videoId} = useParams();
  useEffect(()=>{dispatch(fetchVideo(videoId))},[dispatch,videoId]);
  const {video, isLoading, isError, error} = useSelector(state=>state.video);
  let content;
  if (isLoading) {
    content = <Loading />
  }
  if (!isLoading && isError) {
    content = <Error error={error} />
  }
  if (!isLoading && !isError && !video?.id) {
    content = <div className="col-span-12">There are no videos</div>
  }
  if (!isLoading && !isError && video?.id) {
    content = (<div className="grid grid-cols-3 gap-2 lg:gap-8">
    <VideoDetails key={video.id} video={video} />
    <RelatedVideos key={video.id} tags={video.tags} />
  </div>)
  }
  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
};

export default Video;
