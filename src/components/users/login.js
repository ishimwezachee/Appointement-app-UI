/* eslint-disable */
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { connect } from 'react-redux';
import  loginUser  from '../../redux/action/login';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
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
  this.props.loginUser(this.state, this.handleSuccess);
};

handleSuccess = () => {
  this.setState({
    name: '',
    password: '',
  });
};

render() {
  const { name, password } = this.state;
  return (
    <>
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl
          type="text"
          placeholder="name"
          className="mr-sm-2"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <FormControl
          type="password"
          placeholder="password"
          className="mr-sm-2"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <Button variant="outline-success" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
}
}
const mapStateToProps = (state) => ({
  error: state.user.error,
});
const mapDispatchToProps = (dispatch) => ({
  loginUser: () => { dispatch(loginUser()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
