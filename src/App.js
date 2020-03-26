import React, { Component } from "react";

import logo from "./assets/images/logo.svg";
import bgMobile from "./assets/images/hero-mobile.jpg";
import iconArrow from "./assets/images/icon-arrow.svg";
import iconError from "./assets/images/icon-error.svg";

import "./App.css";

class App extends Component {
  state = { email: "", error: false };

  handleOnBlur = event => {
    const { email } = this.state;
    if (email.length === 0) {
      this.setState({
        error: true
      });
    }
  };

  handleOnChange = event => {
    this.setState({
      email: event.target.value,
      error: false
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const { email } = this.state;

    if (email.length === 0) {
      this.setState({
        error: true
      });
    }
  };

  render() {
    const { email, error } = this.state;
    return (
      <div className="container">
        <div className="left">
          <div className="inner-container">
            <header>
              <img src={logo} alt="Logo" />
              <img className="bg-mobile" src={bgMobile} alt="mobile" />
              <h1>
                <span>We're</span>
                <br />
                coming
                <br />
                soon
              </h1>
              <p>
                Hello fellow shoppers! We're currently building our new fashion
                store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </p>
            </header>
            <form className="form">
              <div className={error ? "control control-fail" : "control"}>
                <input
                  value={email}
                  onChange={this.handleOnChange}
                  onBlur={this.handleOnBlur}
                  className={error ? "input input-fail" : "input"}
                  type="email"
                  placeholder="Email Address"
                  name="email"
                />
                <img className="icon error-icon" alt="error" src={iconError} />
                <button onClick={this.handleOnSubmit}>
                  <img
                    alt="arrow"
                    className="icon arrow-icon"
                    src={iconArrow}
                  />
                </button>
                <small>Please provide a valid email</small>
              </div>
            </form>
          </div>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}

export default App;
