import React from "react";
import "./sign_in.scss";
import FormInput from "../../components/form_input/form_input.component";
import { CustomButton } from "../../components/custom_button/custom_button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
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
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons">
            <CustomButton value="SIGN IN" type="submit">
              Sign in
            </CustomButton>

            <CustomButton
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