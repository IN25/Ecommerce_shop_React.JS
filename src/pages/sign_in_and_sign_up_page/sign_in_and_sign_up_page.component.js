import React from "react";
import "./sign_in_and_sign_up_page.scss";
import SignIn from "../../components/sign_in/sign_in.component";
import SignUp from "../../components/sign_up/sign_up.component";

export const SignInAndSignUpPage = () => {
  return (
    <div className="sign_in_and_sign_up">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};
