import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = { username: "frodo", password: "pass" };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            value={this.state.username}
            onChange={this.handleChange}
            type="text"
            id="username"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="password"
            type="password"
            value={this.state.password}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }

  onSubmit = async e => {
    e.preventDefault();

    const res = await axios.post("/auth/login", this.state);
    localStorage.setItem("specialToken", res.data.token);
    this.props.history.push("/");
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
}

export default Login;
