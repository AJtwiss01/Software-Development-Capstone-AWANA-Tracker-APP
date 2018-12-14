import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <Link className="nav-link" to={{ pathname: "/students" }}>
              Student List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={{ pathname: "/manage-users"}}>
              Manage Users
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

SideBar.propTypes = {};

export default SideBar;
