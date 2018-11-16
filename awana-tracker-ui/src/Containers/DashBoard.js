import React, { Component } from "react";
import PropTypes from "prop-types";
import SideBar from "../Components/SideBar";
import StudentList from "../Components/StudentList";
import ClassList  from "../Components/ClassList";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SideBar />
        <ClassList />
        <StudentList />
      </div>
    );
  }
}

DashBoard.propTypes = {};

export default DashBoard;
