import React, { Fragment, useContext } from "react";
import { AudioContextApi } from "../../Apis/AudioContext";
import AudioList from "./AudioList";
import "./audio.css";

const MusicHome = () => {
  let AUDIO = useContext(AudioContextApi);
  console.log(AUDIO);
  return (
    <Fragment>
      {AUDIO.state.length >= 0 && (
        <AudioList audio={AUDIO.state} HandleSelect={AUDIO.HandleSelect} />
      )}
    </Fragment>
  );
};

export default MusicHome;
