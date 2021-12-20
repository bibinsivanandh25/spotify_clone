import React, { useState, useRef } from "react";

const MusicBlock = ({
  id,
  title,
  artist,
  language,
  details,
  category,
  poster,
  src,
}) => {
  let [Play, setPlay] = useState(false);
  let audioRef = useRef(null);
  let PlayAudio = () => {
    setPlay(!Play);
    Play === true ? audioRef.current.play() : audioRef.current.pause();
  };
  return (
    <div className="col-3" key={id}>
      <figure>
        <img src={poster} alt={title} onClick={PlayAudio} />
      </figure>
      <h2>{title}</h2>
      <audio src={src} ref={audioRef} controls></audio>
    </div>
  );
};

export default MusicBlock;
