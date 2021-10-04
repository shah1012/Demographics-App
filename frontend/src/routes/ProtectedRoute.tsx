import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { User } from "../types/UserType";

interface Props extends RouteProps {
  user: User;
}

const ProtectedRoute = ({ user, ...routeProps }: Props) => {
  if (user) {
    return <Route {...routeProps} />;
  }
  return <Redirect to="/login" />;
};

export default ProtectedRoute;
