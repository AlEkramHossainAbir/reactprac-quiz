import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import classes from "../styles/Video.module.css";
import Video from "./Video";

export default function Videos() {
  const { loading, error, videos } = useVideoList();
  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to="/quiz" key={video.youtubeID}>
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
          </Link>
        ))}
      {!loading && videos.length === 0 && <div className={error}></div>}
    </div>
  );
}
