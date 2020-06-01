import React, { useState, Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { LoginPage, RegistrationPage } from "./pages/index";
import useProtectedRoute from "./utils/useProtectedRoute";
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); //auth status
  return (
    <Router>
      <Switch>
        <Route path="/registration">
          <RegistrationPage />
        </Route>
        {/* maintain the order as the function will default back to next route */}
        {/* {useProtectedRoute(isAuthenticated, Component, "/test")} */}
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}
