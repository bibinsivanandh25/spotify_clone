import React, { Fragment, useContext, useState } from "react";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import "./audio.css";
import { useHistory } from "react-router-dom";
import { AudioContextApi } from "../../Apis/AudioContext";

let genre = [
  "Blues",
  "Classical",
  "Disco",
  "Hiphop",
  "Jazz",
  "Oldies",
  "County",
  "Rock",
  "Electronic",
  "Folk",
  "Indie rock",
];
const CreatePlaylist = () => {
  let data = useContext(AudioContextApi);
  console.log(data);
  let history = useHistory();
  let [state, setState] = useState({
    audio_title: "",
    audio_artist: "",
    audio_language: "",
    audio_category: "",
    audio_details: "",
    loading: false,
    barStatus: false,
    progress: 0,
  });
  let {
    audio_title,
    audio_artist,
    audio_language,
    audio_category,
    audio_details,
    loading,
    barStatus,
    progress,
  } = state;

  let [Poster, setPoster] = useState("");
  let [AudioFile, setAudioFile] = useState("");

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handlePoster = e => {
    setPoster({ [e.target.name]: e.target.files[0] });
  };
  let handleAudioFile = e => {
    setAudioFile({ [e.target.name]: e.target.files[0] });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      console.log(state);
      console.log(Poster);
      console.log(AudioFile);
      let AUDIO_POSTER = Poster.audio_poster.name;
      let AUDIO_FILE = AudioFile.audio_file.name;
      let audio_storage = firebase
        .storage()
        .ref(`/music-poster/${AUDIO_POSTER}`)
        .put(Poster.audio_poster);
      let mp3_storage = firebase
        .storage()
        .ref(`/music-File/${AUDIO_FILE}`)
        .put(AudioFile.audio_file);
      // console.log(audio_storage);
      // console.log(Mp3_storage);

      //?firebase event
      mp3_storage.on(
        "state_changed",
        snapShot => {
          //? progress Bar
          let progressBar =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setState({ loading: true, barStatus: true, progress: progressBar });
        },
        err => {
          //? error handling
          throw err;
        },
        async () => {
          //?completion of task
          let DownloadPoster = await firebase
            .storage()
            .ref("music-poster")
            .child(AUDIO_POSTER)
            .getDownloadURL();
          setPoster(DownloadPoster);

          let DownloadMp3 = await firebase
            .storage()
            .ref("music-File")
            .child(AUDIO_FILE)
            .getDownloadURL();
          setAudioFile(DownloadMp3);

          //!==================connect to database================================/
          firebase
            .database()
            .ref("audio_library")
            .push({
              ...state,
              DownloadPoster,
              DownloadMp3,
            });
          toast.success("successfully audio uploaded");
          history.push("/userHome/profile");
        }
      );
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };

  let ProgressTemplate = () => {
    return (
      <progress value={progress} min={0} max={100}>
        {progress}
      </progress>
    );
  };
  return (
    <section id="AudioSection">
      <div id="progressSection">
        {barStatus === true ? (
          <>
            <span>
              <ProgressTemplate />
            </span>
            <span>{Math.round(progress) + "%"}</span>
          </>
        ) : (
          ""
        )}
      </div>
      <article>
        <h2>Create Playlist</h2>
        <form onSubmit={handleSubmit}>
          <div className="from-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="audio_title"
              value={audio_title}
              onChange={handleChange}
              placeholder="enter audio title"
            />
          </div>
          <div className="from-group">
            <label htmlFor="artist">Artist</label>
            <input
              type="text"
              className="form-control"
              name="audio_artist"
              value={audio_artist}
              onChange={handleChange}
              placeholder="enter artist"
              required
            />
          </div>
          <div className="from-group">
            <label htmlFor="language">Language</label>
            <input
              type="text"
              className="form-control"
              name="audio_language"
              value={audio_language}
              onChange={handleChange}
              required
              placeholder="enter languages"
            />
          </div>
          <div className="from-group">
            <label htmlFor="audio_category">Audio Category</label>
            <select
              name="audio_category"
              value={audio_category}
              onChange={handleChange}
            >
              {genre.map((value, index) => (
                <Fragment key={index}>
                  <option value={value} defaultValue={value[0]}>
                    {value}
                  </option>
                </Fragment>
              ))}
            </select>
          </div>
          <div className="from-group audio_details">
            <label htmlFor="audio_details">Audio description</label>
            <textarea
              name="audio_details"
              cols="30"
              rows="10"
              value={audio_details}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="from-group audio-details">
            <label htmlFor="audio_poster" style={{ marginLeft: "14px" }}>
              Audio poster
            </label>
            <input
              type="file"
              className="form-control"
              name="audio_poster"
              onChange={handlePoster}
            />
          </div>
          <div className="from-group">
            <label htmlFor="audio_file" style={{ marginLeft: "14px" }}>
              Upload Audio file
            </label>
            <input
              type="file"
              className="form-control"
              name="audio_file"
              onChange={handleAudioFile}
            />
          </div>
          <div className="form-group btn-block">
            <button>{loading ? "uploading" : "upload"}</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreatePlaylist;
