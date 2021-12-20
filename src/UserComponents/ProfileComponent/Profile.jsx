import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContextApi } from "../../Apis/AuthContext";
import "./Profile.css";

const Profile = () => {
  let { displayName, photoURL } = useContext(AuthContextApi);
  return (
    <section id="profileBlock">
      <article>
        <header>
          <Link to="/userHome/upload-photo">
            <figure>
              <span className="_editIcon">
                <i class="fa fa-pencil" aria-hidden="true"></i>
                choose photo
              </span>
              <img src={photoURL} alt={displayName} />
            </figure>
          </Link>
          <aside>
            <h5>PROFILE</h5>
            <h1>{displayName}</h1>
          </aside>
        </header>
      </article>
    </section>
  );
};

export default Profile;
