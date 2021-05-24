import React from "react";
import { FormInput } from "../form_input/form_input.component";
import { CustomButton } from "../custom_button/custom_button.component";
import { auth, createUserProfileDocument } from "../../assets/firebase/firebase.utils";
import "./sign_up.scss";

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

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      // auth.createUserWithEmailAndPassword(this.email, this.password)
      // Creates a new user account associated with the specified email address and password and returns a userAuth object
      // On successful creation of the user account, this user will also be signed in to your application.
      // User account creation can fail if the account already exists or the password is invalid.
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
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

export default SignUp;
