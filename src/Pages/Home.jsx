import React from "react";
import Main from "./MainComponent/Main";
import SliderComponent from "./SliderComponent/SliderComponent";
import SectionComp from "./SectionComponent/SectionComp";
import Footer from "./FooterComponent/Footer";

const Home = () => {
  return (
    <div>
      <SliderComponent />
      <Main />
      <SectionComp />
      <Footer />
    </div>
  );
};

export default Home;
