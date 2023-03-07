import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../shared/Loading";
import Error from "../videoGrid/Error";
import RelatedVideo from "./RelatedVideo";

const RelatedVideos = ({id, tags}) => {
  const dispatch = useDispatch();
  useEffect(()=>{dispatch(fetchRelatedVideos({id, tags}))},[id, tags, dispatch]);
  const {relatedVideos, isLoading, isError, error} = useSelector(state=>state.relatedVideos);
  let content;
  if (isLoading) {
    content = <Loading />
  }
  if (!isLoading && isError) {
    content = <Error error={error} />
  }
  if (!isLoading && !isError && !relatedVideos?.length===0) {
    content = <div className="col-span-12">There are no Related videos</div>
  }
  if (!isLoading && !isError && relatedVideos?.length>0) {
    content = relatedVideos.map(relatedVideo=><RelatedVideo key={relatedVideo.id} relatedVideo={relatedVideo} />)
  }
  return (
    <>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {content}
      </div>
    </>
  );
};

export default RelatedVideos;
