import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { gql } from "apollo-boost";
import { graphql, Query } from "react-apollo";

const GET_STUDENTS = gql`
  {
    users {
      id
      name
      classId {
        name
      }
      userType
      badge1 {
        badgeId
      }
      badge2 {
        badgeId
      }
      badge3 {
        badgeId
      }
      badge4 {
        badgeId
      }
      badge5 {
        badgeId
      }
      badge6 {
        badgeId
      }
    }
  }
`;

class StudentList extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="row text-center placeholders">
        <Query query={GET_STUDENTS}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
              <div style={{ display: "flex", width: "100%" }}>
                {data.users.map(student => {
                  if (student.userType === "student") {
                    return (
                      <div className="col-md-6 col-lg-3 placeholder">
                        <div className="card p-4">
                          <img
                            className="card-img-top m-auto"
                            src="assets/img/userPlachoder.png"
                            width="80px"
                            alt="Card image"
                          />

                          <div className="card-body">
                            <h4 className="card-title">{student.name}</h4>
                            <p className="card-text">
                              {student.classId[0].name}
                            </p>
                            <a href={"#"} className="btn btn-outline-primary">
                              <Link
                                to={{
                                  pathname: "/student-profile",
                                  state: { id: student.id }
                                }}
                              >
                             See Profile
                              </Link>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

StudentList.propTypes = {};

export default graphql(GET_STUDENTS)(StudentList);
