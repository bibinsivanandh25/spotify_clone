import React from "react";
import { useParams } from "react-router-dom";
import AudioDetails from "../Components/AudioComponent/AudioDetails";
import CreatePlaylist from "../Components/AudioComponent/CreatePlaylist";
import MusicHome from "../Components/AudioComponent/MusicHome";
import Profile from "./ProfileComponent/Profile";
import ProfileUpload from "./ProfileComponent/ProfileUpload";

const UserRightBlock = () => {
  let { id } = useParams();
  return (
    <div className="userRightBlock">
      {id === "profile" && <Profile />}
      {id === "upload-photo" && <ProfileUpload />}
      {id === "create-play-list" && <CreatePlaylist />}
      {id === "music-home" && <MusicHome />}
      <footer>
        <AudioDetails />
      </footer>
    </div>
  );
};

export default UserRightBlock;
