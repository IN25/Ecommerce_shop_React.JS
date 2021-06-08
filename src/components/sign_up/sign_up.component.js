import React from "react";
import "./sign_up.scss";
import { connect } from "react-redux";

import { FormInput } from "../form_input/form_input.component";
import { CustomButton } from "../custom_button/custom_button.component";

import { signUpStart } from "../../redux/user/user.actions";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    await signUpStart(password, displayName, email);

    await this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  render() {
    return (
      <div className="sign_up">
        <h2 className="title">I don't have an account </h2>
        <span>Sign up with your email and password</span>

        <form className="form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          ></FormInput>

          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          ></FormInput>

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          ></FormInput>

          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          ></FormInput>

          <CustomButton type="submit" value="SIGN UP"></CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStart: (password, displayName, email) =>
      dispatch(signUpStart({ password, displayName, email })),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
