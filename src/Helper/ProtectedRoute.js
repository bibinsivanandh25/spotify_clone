import React, { Fragment, useContext } from "react";
import { AuthContextApi } from "../Apis/AuthContext";
import { Redirect, Route } from "react-router-dom";
import Spinner from "../Pages/Spinner/Spinner";

const ProtectedRoute = ({ component: Component, ...parameters }) => {
  let USER = useContext(AuthContextApi);
  return (
    <Route
      {...parameters}
      render={(props) => {
        return (
          <Fragment>
            {USER === null ? (
              <Spinner />
            ) : (
              <Fragment>
                {USER ? <Component {...props} /> : <Redirect to="/login" />}
              </Fragment>
            )}
          </Fragment>
        );
      }}
    />
  );
};

export default ProtectedRoute;
