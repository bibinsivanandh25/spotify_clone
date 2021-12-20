import React, { useContext, useState } from "react";
import { AuthContextApi } from "../../Apis/AuthContext";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import "./Profile.css";

const ProfileUpload = () => {
  let currentUSER = useContext(AuthContextApi);
  let [state, setState] = useState({
    avatar: null,
    loading: false,
    barStatus: false,
    progress: 0,
  });

  let { avatar, loading, barStatus, progress } = state;

  let handleChange = e => {
    setState({ ...state, avatar: e.target.files[0] });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let { name } = avatar;

      let uploadTask = firebase
        .storage()
        .ref(`/profile-photo/${name}`)
        .put(avatar);
      console.log(uploadTask);

      //!  firebase events
      uploadTask.on(
        "state_changed",
        snapShot => {
          //?Progress bar

          let progressBar =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setState({ progress: progressBar, barStatus: true, loading: true });
        },

        err => {
          //?error handling
        },
        async () => {
          //?completion of Task

          let DownloadURL = await firebase
            .storage()
            .ref("profile-photo")
            .child(name)
            .getDownloadURL();
          setState({ barStatus: false, loading: false });
          currentUSER.updateProfile({
            photoURL: DownloadURL,
          });
          toast.success("profile photo successfully updated");
          window.location.assign("/userHome/profile");
        }
      );
    } catch (error) {}
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
    <section id="photo_upload_block">
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
        <div className="_block">
          <h2>Upload Photo</h2>
          <form onSubmit={handleSubmit}>
            <input type="file" name="profile_photo" onChange={handleChange} />
            <button>
              {loading === true ? <i className="fas fa-spinner"></i> : "upload"}
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default ProfileUpload;
