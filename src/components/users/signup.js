/*eslint-disable*/
import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: '',
    };
  }

      handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        });
      };

      handleSubmit = (event) => {
        event.preventDefault();
        const {
          name, email, password, password_confirmation,
        } = this.state;
        const user = {
          name,
          email,
          password,
          password_confirmation,
        };
        axios.post('http://localhost:3001/users', { user }, { withCredentials: true })
          .then((response) => {
            if (response.data.status === 'created') {
              this.props.handleLogin(response.data);
              this.redirect();
            } else {
              this.setState({
                errors: response.data.errors,
              });
            }
          })
          .catch((error) => console.log('api errors:', error));
      };

redirect = () => {
  this.props.history.push('/');
}

handleErrors = () => (
  <div>
    <ul>
      {this.state.errors.map((error) => <li key={error}>{error}</li>)}
    </ul>
  </div>
);

render() {
  const {
    name, email, password, password_confirmation,
  } = this.state;
  return (
    <div>
      <h1 className="log-title">Sign Up</h1>
      <form onSubmit={this.handleSubmit}>
        <label className="form-label">Name</label>
        <input
          placeholder="name"
          className="form-control"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label className="form-label">Email</label>
        <input
          placeholder="email"
          className="form-control"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <label className="form-label">Password</label>
        <input
          placeholder="password"
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <label className="form-label">Password confirmation</label>
        <input
          placeholder="password confirmation"
          className="form-control"
          type="password"
          name="password_confirmation"
          value={password_confirmation}
          onChange={this.handleChange}
        />
        <div className="btn-1">
          <button className="sign-btn" placeholder="submit" type="submit" onClick={() => { window.location.href = '/items'; }}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
}
export default Signup;
