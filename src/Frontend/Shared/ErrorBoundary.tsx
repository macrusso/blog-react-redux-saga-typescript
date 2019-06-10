import React, { Component } from "react";

class ErrorBoundary extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(error: any, info: any) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
