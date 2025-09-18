import { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props) // calls the parent Component Constructor
    console.log("1. Constructor Called")

    // this refers to Component Instance
    // State Initilization
    this.state = {
      name: "Cuvette",
      age: 19,
      count: 0,
      users: [],
      loading: true
    }


    // Method Binding
    this.handleClick = this.handleClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  handleInputChange(event) {
    this.setState({
      name: event.target.value
    })
  }
  
  // Lifecycle Methods

  componentDidMount() {
    console.log("3. Component mounted - API calls go here")

    // Stimulate FAKE API Data
    setTimeout(() => {
      this.setState({
        users: ["Shubham", "Suraj", "Rahul", "Unknown"],
        loading: false,
      })
    }, 3000)
  }

  componentDidUpdate(prevState) {
    console.log("Component Updated")
    if(prevState.count !== this.state.count) {
      console.log("Count Changed:", this.state.count)
    }
  }

  render() {
    console.log("2. Render Called")

    return (
      <>
        <div className="userProfile">
          <h1>User Profile</h1>
          <p>{this.state.name}</p>
          <p>{this.state.age}</p>
          <p>{this.state.count}</p>

          <input type="text" value={this.state.name} onChange={this.handleInputChange} />

          <button onClick={this.handleClick}>Increment Count</button>


          {
            this.state.loading ? (
              <p>Loading users...</p>
            ) : (
              <ul>
                {
                  this.state.users.map((user, index) => (
                    <li key={index}>{user}</li>
                  ))
                }
              </ul>
            )
          }
        </div>
      </>
    )
  }
}

export default UserProfile