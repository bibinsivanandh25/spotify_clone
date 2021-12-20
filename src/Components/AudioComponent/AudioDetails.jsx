import React, { useContext } from "react";
import { AudioContextApi } from "../../Apis/AudioContext";

const AudioDetails = () => {
  let currentSong = useContext(AudioContextApi);
  let playSong = currentSong.selectSong;
  console.log(playSong);
  return (
    <section className="audioPlayer">
      <article>
        {currentSong === null ? (
          "loading"
        ) : (
          <div className="_contentBlock">
            <header>
              <h2>{playSong.title}</h2>
              <p>
                <img src={playSong.poster} alt={playSong.title} />
              </p>
            </header>
            <main>
              <audio src={playSong.src} controls autoPlay="true"></audio>
            </main>
            <footer></footer>
          </div>
        )}
      </article>
    </section>
  );
};

export default AudioDetails;
