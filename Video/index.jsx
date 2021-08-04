import React, { useState } from "react";

function Video(props) {
  const title = props.title,
    thumbnail = props.thumbnail,
    embedCode = props.embedCode;

  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="video">
      {!showVideo ? (
        <div className="thumbnail">
          <h2>{title}</h2>
          <div className="play" onClick={() => setShowVideo(true)}>
            <i className="fa fa-play"></i>
          </div>
          <img src={thumbnail}></img>
        </div>
      ) : (
        <iframe
          width="100%"
          height="550"
          src={`https://www.youtube.com/embed/${embedCode}?autoplay=1`}
          frameborder="0"
          allow="autoplay;"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
}

export default Video;
