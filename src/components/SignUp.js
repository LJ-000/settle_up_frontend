import React, { Component } from 'react';
import axios from 'axios'

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };
  }

handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password, password_confirmation} = this.state
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }

axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

redirect = () => {
    this.props.history.push('/')
  }

handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}
        </ul> 
      </div>
    )
  };

render() {
    const {username, password, password_confirmation} = this.state
return (
<div className="signup_page">
    <br></br>               
    <br></br>               
    <br></br>               
    <br></br>               
<div className="signup_form">
        <h1>Sign Up</h1>
        <h5>Use Email Address as Username</h5>     
    <form onSubmit={this.handleSubmit}>
          <input className="username_form"
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        <br></br>      
          <input className="username_form"
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          /> 
        <br></br>               
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
        <br></br>   
        <br></br>         
          <button className="form_button" placeholder="submit" type="submit">
            Sign Up
          </button>
        </form>
    </div>
</div>
    );
  }
}
export default Signup;