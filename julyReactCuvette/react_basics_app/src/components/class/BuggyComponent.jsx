import { Component } from "react";

class BuggyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      throwError : false
    }
  }

  render () {
    if(this.state.throwError) {
      throw new Error("I got crashed by horrific ......")
    }

    return (
      <button onClick={() => this.setState({ throwError: true})}>Click to cause an error</button>
    )
  }
}

export default BuggyComponent