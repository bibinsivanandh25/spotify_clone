import React from "react";
import "./Section.css";

const MainComp = () => {
  return (
    <section id="sectionBlock">
      <article>
        <div className="sectionLeft">
          <h5>SPOTIFY FREE</h5>
          <h1>Listening is everything</h1>
          <p className="sectionContent">
            Millions of songs and podcasts. No credit card <br />
            needed.
          </p>
          <button>Get Spotify Free</button>
        </div>
        <div className="sectionRight"></div>
      </article>
    </section>
  );
};

export default MainComp;
