import React from "react";

const VideoItem = (props) => {
  return (
    <div className="item VideoItem" onClick={() => props.click(props.video)}>
      <img className="ui image" src={props.imgUrl} alt={props.title} />
      <div className="content">
        <div className="description">{props.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
