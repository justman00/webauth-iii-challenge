import React from "react";
import { Route, NavLink } from "react-router-dom";

import Login from "./auth/Login";
import Register from "./auth/Register";
import Main from "./layout/Main";
import Users from "./layout/Users";

function App(props) {
  return (
    <>
      <div>
        <NavLink
          exact
          activeStyle={{ color: "black", fontSize: "2rem" }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink activeStyle={{ color: "black", fontSize: "2rem" }} to="/login">
          Login
        </NavLink>
        <NavLink
          activeStyle={{ color: "black", fontSize: "2rem" }}
          to="/register"
        >
          Register
        </NavLink>
        <NavLink activeStyle={{ color: "black", fontSize: "2rem" }} to="/users">
          Users
        </NavLink>
      </div>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/users" component={Users} />
    </>
  );
}

export default App;
