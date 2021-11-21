import React, { Component } from "react";
import Input from "../general/Input";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password1: "",
      password2: "",
      email: "",
    };
  }
  onChange(e) {
    console.log(e);
  }
  render() {
    return (
      <div className="container">
        <h1 className="large text-primary">Register</h1>
        <p className="lead">
          <i class="fas fa-user"></i>Create Your Account
        </p>
        <div className="form">
          <Input
            type="text"
            placeholder="Enter Name"
            value="name"
            onChange={this.onChange}
          />
        </div>
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
        <div className="form">
          <Input
            type="password"
            placeholder="Confirm Password"
            value="password2"
            onChange={this.onChange}
          />
        </div>
        <button className="btn btn-primary">Register</button>
      </div>
    );
  }
}