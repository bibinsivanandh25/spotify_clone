import React from "react";
import AudioItem from "./AudioItem";

const AudioList = props => {
  //   console.log(props.audio);
  let { audio, HandleSelect } = props;
  return (
    <section id="musicHome">
      <article>
        {audio.map(x => {
          return <AudioItem key={x.id} audio={x} HandleSelect={HandleSelect} />;
        })}
      </article>
      <h2>List of Audios</h2>
    </section>
  );
};

export default AudioList;
