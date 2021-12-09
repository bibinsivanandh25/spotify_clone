import React from "react";
import { Link } from "react-router-dom";
import "./MainComponent.css";

const Main = () => {
  return (
    <section id="mainBlock">
      <article>
        <div className="mainLeft">
          <h5>#SPOTIFYWRAPPED</h5>
          <h1>
            2021 Wrapped is <br />
            ready.
          </h1>
          <p className="mainContent">
            But it’s only available in the Spotify app. <br />
            Download it now to discover more.
          </p>
          <div className="button">
            <div className="button1">
              <Link to="/">
                <img
                  src="https://www-growth.scdn.co/static/badges/svgs/apple/badge-en.svg"
                  alt="button"
                />
              </Link>
            </div>
            <div className="button2">
              <Link to="/">
                <img
                  src="https://www-growth.scdn.co/static/badges/svgs/google/badge-en.svg"
                  alt="button1"
                />
              </Link>
            </div>
          </div>
          <p className="mainText">
            <Link to="/">Listen to 2021 highlights here.</Link>
          </p>
        </div>
        <div className="mainRight"></div>
      </article>
    </section>
  );
};

export default Main;
