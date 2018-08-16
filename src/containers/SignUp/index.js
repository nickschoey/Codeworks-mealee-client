import React from 'react';
import './SignUp.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
const FormItem = Form.Item;

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        submitted: false
      }
    };
  }
  handleChange = (event) => {
    console.log(event.target);
    
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }
  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log('aaaaa');
  };
  render() {
    return (
      <div className="login-page">
        <div className="login-page__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="login-page__form">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              <Input
                onChange={this.handleChange}
                name="firstName"
                value={this.state.user.firstName}
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="First name"
              />
            </FormItem>
            <FormItem>
              <Input
                onChange={this.handleChange}
                name="lastName"
                value={this.state.lastName}
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Last name"
              />
            </FormItem>
            <FormItem>
              <Input
                onChange={this.handleChange}
                value={this.state.email}
                name="email"
                prefix={
                  <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Email address"
              />
            </FormItem>
            <FormItem>
              <Input
                onChange={this.handleChange}
                value={this.state.password}
                name="password"
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Register
                {/* <Link to="/">Log in </Link> */}
              </Button>
            </FormItem>
            
            <FormItem className="login-form__options">
              <a className="login-form-forgot" href="">
                Log in
              </a>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {};

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = dispatch => ({
// });

export default connect()(SignUp);
// mapStateToProps
// mapDispatchToProps
