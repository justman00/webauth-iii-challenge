import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = { username: "", password: "", department: "" };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="username"
            value={this.state.username}
          />
          <label htmlFor="department">Department</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="department"
            value={this.state.department}
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

  onSubmit = e => {
    e.preventDefault();

    axios.post("/auth/register", this.state);
    this.props.history.push("/login");
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
}

export default Register;
