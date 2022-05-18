import React from "react";
import VideoItem from "./VideoItem/VideoItem";
const VideoList = (props) => {
  const list = props.videos.map((x, i) => {
    return (
      <VideoItem
        video={x}
        title={x.snippet.title}
        key={x.id.videoId}
        imgUrl={x.snippet.thumbnails.medium.url}
        click={props.videoClicked}
        id={i}
      />
    );
  });
  return <div className="ui list">{list}</div>;
};

export default VideoList;
