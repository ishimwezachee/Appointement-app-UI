/* eslint-disable */

import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: '',
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

//client/src/Login.js
handleSubmit = (event) => {
    event.preventDefault()
    const {name, email, password} = this.state 
    let user = {
      name: name,
      email: email,
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
    const {name, email, password} = this.state
    return (
      <div>
        <h1 className="log-title">Log In</h1>
<form onSubmit={this.handleSubmit}>
          <label class="form-label">Name</label>
          <input
            placeholder="name"
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label class="form-label">Email</label>
          <input
            placeholder="email"
            type="text"
            className="form-control"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label class="form-label">Password</label>
          <input
            placeholder="password"
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={this.handleChange}
          />
          <div className="btn-1">
            <button className="log-btn" placeholder="submit" onClick={() => { window.location.href = `/items`;}} type="submit">
              Log In
            </button>
          </div>
          <div className="or">
            or &nbsp; <Link to='/signup'>sign up</Link>
          </div>
         </form>
      </div>
    );
  }
}
export default Login;


