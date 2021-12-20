import React from "react";
import { render } from "react-dom";
import AudioContextProvider from "./Apis/AudioContext";
import AuthProvider from "./Apis/AuthContext";
import App from "./App";
import "./GlobalSpotify.css";

render(
  <AudioContextProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </AudioContextProvider>,
  document.querySelector("#root")
);
