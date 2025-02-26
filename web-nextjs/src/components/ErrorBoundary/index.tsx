import { Component, ReactNode } from "react";

interface State {
  hasError: boolean;
  error: Error | null;
}

interface Props {
  children: ReactNode;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: { componentStack: string }): void {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Uh oh, something went terribly wrong 😩</h1>
          <pre>
            {this.state.error?.message || JSON.stringify(this.state.error)}
          </pre>
          <button onClick={() => (window.location.href = "/")}>
            Click here to reload the app
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
