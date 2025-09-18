import React, { Component }  from "react"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError : false,
      error: null,
      errorInfo: null
    }
  }

  // Lifecycle method for error handling
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error Caught:", error, errorInfo)
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if(this.state.hasError) {
      return (
        <div className="error" style={{ padding: "20px", border: "1px solid red"}}>
          <h2>Something went wrong!</h2>
          <details style={{ whiteSpace: "pre-wrap"}}>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary