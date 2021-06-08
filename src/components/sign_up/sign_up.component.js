import React, { useState } from "react";
import "./sign_up.scss";
import { connect } from "react-redux";

import { FormInput } from "../form_input/form_input.component";
import { CustomButton } from "../custom_button/custom_button.component";

import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value }); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    await signUpStart(password, displayName, email);

    await setUserCredentials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="sign_up">
      <h2 className="title">I don't have an account </h2>
      <span>Sign up with your email and password</span>

      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        ></FormInput>

        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        ></FormInput>

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        ></FormInput>

        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        ></FormInput>

        <CustomButton type="submit" value="SIGN UP"></CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStart: (password, displayName, email) =>
      dispatch(signUpStart({ password, displayName, email })),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
