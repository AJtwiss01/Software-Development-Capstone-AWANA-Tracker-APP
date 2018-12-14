import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

class Navbar extends Component {
  render() {
    return (

        <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-primar1 m-auto">
          <button
            className="navbar-toggler navbar-toggler-right hidden-lg-up"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="navbar-brand"  to={{ pathname: "/" }}>
            <img
              role="img"
              aria-label="Logo"
              src="assets/img/logoPlaceholder.png"
              alt="Logo"
              width="70px"
            />
            
            <span className="awan-tag-text hidden-md-up pl-2">AWANA Dashboard</span>
          </Link>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav m-auto">
              <li>
                <ul className="nav nav-pills flex-column hidden-md-up">
                  <li className="nav-item">
                    <a className="nav-link" href="student-list.html">
                      Student List
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="student-profile.html">
                      Student Profile
                    </a>
                  </li>
                </ul>
              </li>
              <div className="awana-nav-title hidden-md-down">AWANA Dashboard</div>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <i className="fas fa-user" />
            </form>
          </div>
        </nav>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
