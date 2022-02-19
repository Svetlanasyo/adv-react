import React, { Component } from 'react';
import Error from './Error';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username : '',
      password : '',
      passwordConfirmation : '',
      email: '',
      errors : []
    }
  }

  submitForm(event)
  {
    console.log(event);
  }

  validateUsernameOnBlur(event)
  {
    console.log(this);
    const username = event.target.value;
    const errors = this.state.errors;

    errors.push(this.validateNotEmpty("Username", username));
    this.setState({username, errors})
  }

  validatePasswordOnBlur(event)
  {
    console.log(this);
    const password = event.target.value;
    const errors = this.state.errors;

    errors.push(this.validateNotEmpty("Password", password));
    this.setState({password, errors})
  }

  validatePasswordConfirmationOnBlur(event)
  {
    console.log(this);
    const passwordConfirmation = event.target.value;
    const errors = this.state.errors;

    if(passwordConfirmation !== this.state.password)
    {
      errors.push("Password must mach!");
    }
    
    this.setState({passwordConfirmation, errors})
  }

  validateEmailOnBlur(event)
  {
    console.log(this);
    const email = event.target.value;
    const errors = this.state.errors;

    errors.push(this.validateEmailFormat("Email", email));
    this.setState({email, errors})
  }

  validateEmailFormat(field, value)
  {
    let [lhs, rhs] = value.split('@');
    lhs = lhs || '';
    rhs = rhs || '';

    if(lhs.length <= 0 || rhs.length <= 0)
    {
      return `${field} must be in email format`;
    }

  }

  validateNotEmpty(field, value)
  {
    if(value.length <= 0)
    {
      console.log("Empty");
      return `${field} must be filled out!`;
    }
  }

  displayErrors() {
    return (
      <div style={{color : 'red'}}>
        {this.state.errors.map((err,i) => <Error i={i} err={err} />)}
      </div>
    )
  }

  displayForm()
  {
    return (
    <div>
      Username: <input type="text" onBlur={this.validateUsernameOnBlur.bind(this)}/> <br/>
      Password: <input type="text" onBlur={this.validatePasswordOnBlur.bind(this)}/> <br/>
      Password Confirmation: <input type="text" onBlur={this.validatePasswordConfirmationOnBlur.bind(this)}/> <br/>
      EMail: <input type="text" onBlur={this.validateEmailOnBlur.bind(this)}/> <br/>
      <button onClick={this.submitForm}>Submit</button>
      {this.displayErrors()}

    </div>)
  }

  render() {
    return (
      <div>
        Create account:
        <hr/>
        {this.displayForm()}
      </div>
    )
  }

}

export default LoginForm;
