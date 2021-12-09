import React from "react";
import Logo from "../Pages/HeaderComponent/Logo";

const UserLeftBlock = () => {
  return (
    <div className="userLeftBlock">
      <Logo />
      <ul className="icons">
        <li>
          <a href="/">
            <i class="fal fa-home"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fal fa-search"></i>
            <span>Search</span>
          </a>
        </li>
        <li>
          <a href="/">
            <i class="far fa-books"></i>
            <span>Your Library</span>
          </a>
        </li>
      </ul>
      <div className="icons1">
        <ul>
          <li>
            <a href="/">
              <i class="fal fa-plus-square"></i>
              <span>Create PlayList</span>
            </a>
          </li>
          <li>
            <a href="/">
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
        <a href="/">
          <i class="fal fa-arrow-circle-down"></i>
          <span>Install App</span>
        </a>
      </div>
    </div>
  );
};

export default UserLeftBlock;
