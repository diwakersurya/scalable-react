/**
*
* Login
*
*/

import React from 'react';

import styles from './styles.css';
import validator from "email-validator";
import TextInput from "../TextInput"
class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
static propTypes={
  login:React.PropTypes.func.isRequired
}
state={};
login=()=>{
  const email=this.emailField.value();
  if(!validator.validate(email))
  {
    this.setState({
      errorText:"please provide a valid email address."
    });
    return;
  }
  this.setState({
    errorText:null
  });
  this.props.login(email);
}
  render() {
    return (
      <div className={styles.login}>
        <div className={styles.heading}>
          Login with your email.
        </div>
        <TextInput placeholder="Your email"
          ref={(f)=>{this.emailField=f}}
          type="text"
          errorText={this.state.errorText}
        />
        <div className={styles.actionContainer}>
          <div className={styles.button} onClick={this.login}>Log in </div>
          <div className={styles.button} onClick={this.props.cancelLogin}>cancel </div>

        </div>
      </div>
    );
  }
}

export default Login;
