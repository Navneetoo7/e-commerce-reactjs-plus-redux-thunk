import React, { Component } from "react";
import Input from "../general/Input";
import { Link } from "react-router-dom";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      password1: "",
      email: "",
    };
  }
  onChange(e) {
    console.log(e);
  }
  render() {
    return (
      <div className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i class="fas fa-user"></i>Sign Into Your Account
        </p>
        <div className="form">
          <Input
            type="email"
            placeholder="Enter Email"
            value="email"
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Input
            type="password"
            placeholder="Enter Password"
            value="password1"
            onChange={this.onChange}
          />
        </div>
        <button className="btn btn-primary">Sign In</button>
        <p className="my-1">
          Don't Have an account?<Link to="/register">Sign Up</Link>
        </p>
      </div>
    );
  }
}
