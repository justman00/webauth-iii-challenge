import React from "react";
import { Route } from "react-router-dom";

function App(props) {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/users" component={Users} />
    </>
  );
}

export default App;
