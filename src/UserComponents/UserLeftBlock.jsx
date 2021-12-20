import React from "react";
import { Link } from "react-router-dom";

const UserLeftBlock = () => {
  return (
    <div className="userLeftBlock">
      <ul className="icons">
        <li>
          <Link to="/userHome/music-home">
            <i class="fal fa-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <a href="/search">
            <i class="fal fa-search"></i>
            <span>Search</span>
          </a>
        </li>
        <li style={{ marginLeft: "-12px" }}>
          <a href="/library">
            <span>|| \</span>
            <span>Your Library</span>
          </a>
        </li>
      </ul>
      <div className="icons1">
        <ul>
          <li>
            <Link to="/userHome/create-play-list">
              <i class="fal fa-plus-square"></i>
              <span>Create PlayList</span>
            </Link>
          </li>
          <li>
            <a href="/songs">
              <i class="fas fa-heart-square"></i>
              <span>Liked Songs</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="border">
        <p></p>
      </div>
      <div className="footer">
        <a href="/app">
          <i class="fal fa-arrow-circle-down"></i>
          <span>Install App</span>
        </a>
      </div>
    </div>
  );
};

export default UserLeftBlock;
