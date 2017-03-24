import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props) {
    super()
  }
  validatePassword() {

    let x=document.forms["myForm"]["password"].value;
    let y=document.forms["myForm"]["confirm"].value;

      if (x !== y) {
        alert("Passwords must match")
        return false;
      } else {
        alert("Valid!")
        return true;
      }

  }

  render() {
    return (
      <div className="form">
        <form name="myForm">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <input type="password" name="confirm" placeholder="confirm password" />
        <button onClick={() => this.validatePassword()}> Submit </button>
        </form>
      </div>
    );
  }
}

export default Validator;
