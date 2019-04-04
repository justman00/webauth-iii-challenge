import React, { Component } from "react";

class Login extends Component {
  state = { username: "frodo", password: "pass" };

  render() {
    return (
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
          <label htmlFor="password">Password</label>
          <input type="text" id="password" type="password" />
        </div>
      </form>
    );
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
}

export default Login;
