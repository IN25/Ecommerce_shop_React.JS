import React from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./error_boundary.styles";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  //getDerivedStateFromError lifecycle method catches any errors that are thrown in children of this ErrorBoundary component
  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={"https://i.imgur.com/A040Lxr.png"} />
          <ErrorImageText>Sorry, this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    } else {
      //if no error occured render children components
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
