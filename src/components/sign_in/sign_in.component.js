import React from "react";
import "./sign_in.scss";
import { FormInput } from "../../components/form_input/form_input.component";
import { CustomButton } from "../../components/custom_button/custom_button.component";
import { auth, signInWithGoogle } from "../../assets/firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      //auth.signInWithEmailAndPassword(email, password) Asynchronously signs in using an email and password.
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign_in">
        <h2 className="title">I already have an account </h2>
        <span>Sign in with your email and password</span>

        <form className="form" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />

          <div className="buttons">
            <CustomButton value="SIGN IN" type="submit">
              Sign in
            </CustomButton>

            <CustomButton
              //because this CustomButton is inside the form tag, this button's type is set as submit by default, changin it for button will not longer warn to fill the form
              type="button"
              value="SIGN IN WITH GOOGLE"
              onClick={signInWithGoogle}
              isGoogleSignIn
            ></CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
