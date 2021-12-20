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
// import Spinner from "./Pages/Spinner/Spinner";
import ProtectedRoute from "./Helper/ProtectedRoute";
import PublicRoute from "./Helper/PublicRoute";
import PasswordReset from "./Components/AuthComponent/PasswordReset";
import PhoneAuth from "./Components/AuthComponent/PhoneAuth";
// import ProtectedRoute from "./Helper/ProtectedRoute";
// import MyFirstPortal from "./Pages/MyFirstPortal";

const App = () => {
  let AUTH = useContext(AuthContextApi);
  return (
    <section id="spotifyMainBlock">
      <article>
        <Router>
          {/* <header>{!USER ? <Navbar /> : ""}</header> */}
          <header>
            <Navbar />
          </header>

          <ToastContainer />
          {/* <MyFirstPortal /> */}
          <main>
            <Switch>
              <PublicRoute path="/" exact>
                <Home />
              </PublicRoute>
              <PublicRoute path="/signup" exact>
                <Signup />
              </PublicRoute>
              <PublicRoute path="/login" exact>
                <Login />
              </PublicRoute>

              <PublicRoute path="/password-rest" exact>
                <PasswordReset />
              </PublicRoute>

              <PublicRoute path="/otp" exact>
                <PhoneAuth />
              </PublicRoute>
              {/* {AUTH === null ? (
                <Spinner />
              ) : (
                <Route path="/userHome">
                  <UserHome />
                </Route>
              )} */}

              {/* /react version 4 synatax but it's supporting 5 also */}
              <ProtectedRoute path="/userHome" component={UserHome} />

              {/* protectedroute for protecting data */}
              {/* <ProtectedRoute path="/userHome">
                <UserHome />
              </ProtectedRoute> */}

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
