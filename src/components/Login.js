import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
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
    const {username, password} = this.state
    let user = {
      username: username,
      password: password
    }
    
axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
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
        <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  };

render() {
    const {username, password} = this.state 
return (
      <div className="login_form">
        <h1>Log In</h1>     
        <br></br>   
        <form onSubmit={this.handleSubmit}>
          <input className="username_form"
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        <br></br>      
          <input className="password_form"
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />   
        <br></br>
        <br></br>                  
<button className="form_button" placeholder="submit" type="submit">
            Log In
          </button> 
          <br></br>               
          <div className="signup_route">
            or <Link to='/signup'>Sign Up</Link>
          </div>
          
         </form>
      </div>
    );
  }
}
export default Login;