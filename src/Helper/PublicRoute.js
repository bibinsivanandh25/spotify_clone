import React, { useContext } from "react";
import { AuthContextApi } from "../Apis/AuthContext";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ children, ...rest }) => {
  let USER = useContext(AuthContextApi);
  return (
    <Route
      {...rest}
      render={(props) => {
        return USER ? <Redirect to="/userHome/profile" {...props} /> : children;
      }}
    />
  );
};

export default PublicRoute;
