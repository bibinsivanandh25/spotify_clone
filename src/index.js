import React from "react";
import { render } from "react-dom";
import AuthProvider from "./Apis/AuthContext";
import App from "./App";
import "./GlobalSpotify.css";

render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.querySelector("#root")
);
