import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const useProtectedRoute = (authStatus, Component, path) => {
  if (authStatus) {
    return (
      <Router path={path}>
        <Component />
      </Router>
    );
    return null;
  }
};
export default useProtectedRoute;
