import React, { useState } from "react";
import "./sign_in.scss";
import { connect } from "react-redux";

import { FormInput } from "../../components/form_input/form_input.component";
import { CustomButton } from "../../components/custom_button/custom_button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign_in">
      <h2 className="title">I already have an account </h2>
      <span>Sign in with your email and password</span>

      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="Password"
          required
        />

        <div className="buttons">
          <CustomButton className="button" value="SIGN IN" type="submit">
            Sign in
          </CustomButton>

          <CustomButton
            //because this CustomButton is inside the form tag, this button's type is set as submit by default, changing it for button will not longer warn to fill the form
            className="button"
            type="button"
            value="SIGN IN WITH GOOGLE"
            onClick={googleSignInStart}
            isGoogleSignIn
          ></CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password })),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
