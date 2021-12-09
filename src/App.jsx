import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/HeaderComponent/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/AuthComponent/Login";
import Signup from "./Components/AuthComponent/Signup";
import PageNotFound from "./Pages/PageNotFound";
import { AuthContextApi } from "./Apis/AuthContext";
import UserHome from "./UserComponents/UserHome";

const App = () => {
  let USER = useContext(AuthContextApi);
  return (
    <section id="spotifyMainBlock">
      <article>
        <Router>
          <header>{!USER ? <Navbar /> : ""}</header>
          <ToastContainer />
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/signup" exact>
                <Signup />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/userHome">
                <UserHome />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          </main>
        </Router>
      </article>
    </section>
  );
};

export default App;
