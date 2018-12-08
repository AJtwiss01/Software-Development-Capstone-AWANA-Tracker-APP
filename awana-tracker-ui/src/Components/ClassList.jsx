import React, { Component } from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { graphql, Query } from "react-apollo";

const GET_ClASSES = gql`
  {
    classes {
      classId
      name
    }
  }
`;

class ClassList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="row text-center placeholders">
        <Query query={GET_ClASSES}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return (
              <div style={{ display: "flex", width: "100%" }}>
                {data.classes.map(AWANAClassName => (
                  <div className="col-md-6 col-lg-3 placeholder">
                    <a href="#" className="ClassButton">
                      <div className="card p-4">
                        <i
                          class="fa fa-graduation-cap fa-5x"
                          aria-hidden="true"
                        />
                        <div className="card-body">
                          <h4 className="card-title">{AWANAClassName.name}</h4>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

ClassList.propTypes = {};

export default graphql(GET_ClASSES)(ClassList);
