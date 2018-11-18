import React, { Component } from "react";
import PropTypes from "prop-types";

let AWANAClassNames = [
  {
    id: 1,
    name: "Cubies"
  },
  {
    id: 2,
    name: "Sparkies"
  },
  {
    id: 3,
    name: "T&T"
  }
];

class ClassList extends Component {
  render() {
    return (
      <div className="row text-center placeholders">
        {AWANAClassNames.map(AWANAClassName => (
          <div className="col-md-6 col-lg-3 placeholder">
            <a href="#" className="ClassButton">
              <div className="card p-4">
                <i class="fa fa-graduation-cap fa-5x" aria-hidden="true" />

                <div className="card-body">
                  <h4 className="card-title">{AWANAClassName.name}</h4>
                  <p className="card-text">{AWANAClassName.gradeLevel}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

ClassList.propTypes = {};

export default ClassList;
