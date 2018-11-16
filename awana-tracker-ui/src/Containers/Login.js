import React, { Component } from "react";
import PropTypes from "prop-types";

class Login extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1> Welcome</h1>
              <button
                id="login"
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                Login
              </button>
              <button type="button" className="btn btn-secondary btn-lg btn-block">
                Sign Up
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
