import React, { Component } from "react";
import Input from "../general/Input";
import { register } from "../../actions/authActions";
import { connect } from "react-redux";
import { message } from "antd";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      password: "",
      password2: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit() {
    alert("worrking");
    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password,
    };
    if (password === this.state.password2) {
      this.props.register(newUser);
    } else {
      console.log("password not match");
      alert("password not match");
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "nextProps--------->",
      nextProps.auth,
      "-----------------",
      prevState
    );
    // if (nextProps.total !== this.props.) {
    if (
      // nextProps &&
      nextProps.auth.errors &&
      nextProps.auth.errors.length > 0
    ) {
      nextProps.auth.errors.forEach((error) => {
        message.error(error.msg);
      });
    } else if (nextProps.auth.isAuthenticated === true) {
      message.success("Thank you for signing up");
    } else {
    }
    // }
  }

  render() {
    const { name, email, password, password2 } = this.state;
    return (
      <div className="container">
        <h1 className="large text-primary">Register</h1>
        <p className="lead">
          <i class="fas fa-user"></i>Create Your Account
        </p>
        <div className="form">
          <Input
            name="name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Input
            name="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Input
            name="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Input
            name="password2"
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={this.onChange}
          />
        </div>
        <button className="btn btn-primary" onClick={this.onSubmit}>
          Register
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { register })(Register);
