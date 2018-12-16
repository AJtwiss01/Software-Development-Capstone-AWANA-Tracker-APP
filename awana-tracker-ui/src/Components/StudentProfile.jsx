import React, { Component } from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { graphql, Query, Mutation, compose } from "react-apollo";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const GET_STUDENT = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      age
      classId {
        classId
        name
      }
      badge1 {
        badgeId
        name
        url
      }
      badge2 {
        badgeId
        name
        url
      }
      badge3 {
        badgeId
        name
        url
      }
      badge4 {
        badgeId
        name
        url
      }
      badge5 {
        badgeId
        name
        url
      }
      badge6 {
        badgeId
        name
        url
      }
    }
  }
`;

const UPDATE_STUDENTINFO = gql`
  mutation(
    $id: ID!
    $name: String!
    $age: Int!
    $classId: String!
    $badge1: String!
    $badge2: String!
    $badge3: String!
    $badge4: String!
    $badge5: String!
    $badge6: String!
  ) {
    updateStudentInfo(
      id: $id
      name: $name
      age: $age
      classId: $classId
      badge1: $badge1
      badge2: $badge2
      badge3: $badge3
      badge4: $badge4
      badge5: $badge5
      badge6: $badge6
    ) {
      id
      name
      age
      classId {
        classId
        name
      }
      badge1 {
        badgeId
        name
        url
      }
      badge2 {
        badgeId
        name
        url
      }
      badge3 {
        badgeId
        name
        url
      }
      badge4 {
        badgeId
        name
        url
      }
      badge5 {
        badgeId
        name
        url
      }
      badge6 {
        badgeId
        name
        url
      }
    }
  }
`;

class StudentProfile extends Component {
  state = {
    studentsID: "",
    studentsName: "",
    studentsAge: "",
    awanaClassName: "",
    studentBadge1: "",
    studentBadge2: "",
    studentBadge3: "",
    studentBadge4: "",
    studentBadge5: "",
    studentBadge6: "",
    checkSection: ""
  };


  updatesStudent = event => {
    event.preventDefault();
    console.log(this.state);
 
    this.props.UPDATE_STUDENTINFO({
      variables: {
        id: this.state.studentsID,
        name: this.state.studentsName,
        age: parseInt(this.state.studentsAge),
        classId: this.state.awanaClassName,
        badge1: this.state.studentBadge1,
        badge2: this.state.studentBadge2,
        badge3: this.state.studentBadge3,
        badge4: this.state.studentBadge4,
        badge5: this.state.studentBadge5,
        badge6: this.state.studentBadge6
      },
      refetchQueries: [{ query: GET_STUDENT}]
    });
  };
  updateStudentBadge = event => {
    event.preventDefault();

    if(this.state.checkSection === "1"){
      event.preventDefault();
      this.props.UPDATE_STUDENTINFO({
        variables: {
          id: this.state.studentsID,
          name: this.state.studentsName,
          age: parseInt(this.state.studentsAge),
          classId: this.state.awanaClassName,
          badge1: this.state.checkSection,
          badge2: this.state.studentBadge2,
          badge3: this.state.studentBadge3,
          badge4: this.state.studentBadge4,
          badge5: this.state.studentBadge5,
          badge6: this.state.studentBadge6
        },
        refetchQueries: [{ query: UPDATE_STUDENTINFO }]
      });
    }
    else if(this.state.checkSection === "2"){
      event.preventDefault();
      this.props.UPDATE_STUDENTINFO({
        variables: {
          id: this.state.studentsID,
          name: this.state.studentsName,
          age: parseInt(this.state.studentsAge),
          classId: this.state.awanaClassName,
          badge1: this.state.studentBadge1,
          badge2: this.state.checkSection,
          badge3: this.state.studentBadge3,
          badge4: this.state.studentBadge4,
          badge5: this.state.studentBadge5,
          badge6: this.state.studentBadge6
        },
        refetchQueries: [{ query: UPDATE_STUDENTINFO }]
      });
    }
    else if(this.state.checkSection === "3"){
      event.preventDefault();
      this.props.UPDATE_STUDENTINFO({
        variables: {
          id: this.state.studentsID,
          name: this.state.studentsName,
          age: parseInt(this.state.studentsAge),
          classId: this.state.awanaClassName,
          badge1: this.state.studentBadge1,
          badge2: this.state.studentBadge2,
          badge3: this.state.checkSection,
          badge4: this.state.studentBadge4,
          badge5: this.state.studentBadge5,
          badge6: this.state.studentBadge6
        },
        refetchQueries: [{ query: UPDATE_STUDENTINFO }]
      });
    }
    else if(this.state.checkSection === "4"){
      event.preventDefault();
      this.props.UPDATE_STUDENTINFO({
        variables: {
          id: this.state.studentsID,
          name: this.state.studentsName,
          age: parseInt(this.state.studentsAge),
          classId: this.state.awanaClassName,
          badge1: this.state.studentBadge1,
          badge2: this.state.studentBadge2,
          badge3: this.state.studentBadge3,
          badge4: this.state.checkSection,
          badge5: this.state.studentBadge5,
          badge6: this.state.studentBadge6
        },
        refetchQueries: [{ query: UPDATE_STUDENTINFO }]
      });
    }
    else if(this.state.checkSection === "5"){
      event.preventDefault();
      this.props.UPDATE_STUDENTINFO({
        variables: {
          id: this.state.studentsID,
          name: this.state.studentsName,
          age: parseInt(this.state.studentsAge),
          classId: this.state.awanaClassName,
          badge1: this.state.studentBadge1,
          badge2: this.state.studentBadge2,
          badge3: this.state.studentBadge3,
          badge4: this.state.studentBadge4,
          badge5: this.state.checkSection,
          badge6: this.state.studentBadge6
        },
        refetchQueries: [{ query: UPDATE_STUDENTINFO }]
      });
    }
    else if(this.state.checkSection === "6"){
      event.preventDefault();
      this.props.UPDATE_STUDENTINFO({
        variables: {
          id: this.state.studentsID,
          name: this.state.studentsName,
          age: parseInt(this.state.studentsAge),
          classId: this.state.awanaClassName,
          badge1: this.state.studentBadge1,
          badge2: this.state.studentBadge2,
          badge3: this.state.studentBadge3,
          badge4: this.state.studentBadge4,
          badge5: this.state.studentBadge5,
          badge6: this.state.checkSection
        },
        refetchQueries: [{ query: UPDATE_STUDENTINFO }]
      });
      
    }
  };

  removeBadge = event  => {
    event.preventDefault();
    console.log(this)
  }
  render() {
    const { data, id, location } = this.props;

    return (
      <Query query={GET_STUDENT} variables={{ id: location.state.id }}>
      
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;

          return (
            <div>
              <div
                id="student-profile"
                className="row text-center placeholders "
              >
                <div className="studentprofile mb-5">
                  <h1>{data.user.name}</h1>
                  <div className="col-sm-12">
                    <img
                      className="card-img-top m-auto"
                      src="assets/img/userPlachoder.png"
                      width="80px"
                      alt="Card image"
                    />
                  </div>
                  <div className="col-sm-12 ">
                    <Form inline onSubmit={this.updatesStudent}>
                      <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                          type="text"
                          name="name"
                          id="studentsName"
                          onChange={e =>
                            this.setState({
                              studentsID: data.user.id,
                              studentsName: e.target.value,
                              studentBadge1:
                                data.user.badge1.length > 0 ? "1" : "",
                              studentBadge2:
                                data.user.badge2.length > 0 ? "2" : "",
                              studentBadge3:
                                data.user.badge3.length > 0 ? "3" : "",
                              studentBadge4:
                                data.user.badge4.length > 0 ? "4" : "",
                              studentBadge5:
                                data.user.badge5.length > 0 ? "5" : "",
                              studentBadge6:
                                data.user.badge6.length > 0 ? "6" : ""
                            })
                          }
                          placeholder={data.user.name}
                        />
                      </FormGroup>
                     
                      <FormGroup>
                        <Label for="classes">Class</Label>
                        <Input
                          type="select"
                          name="class"
                          id="class"
                          onChange={e =>
                            this.setState({ awanaClassName: e.target.value })
                          }
                        >
                          <option disabled selected>
                            {data.user.classId[0].name}
                          </option>
                          <option value="1">Cubbies</option>
                          <option value="2">Sparkies</option>
                          <option value="3">T&amp;T</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="age">Age</Label>
                        <Input
                          type="select"
                          name="age"
                          id="ageSelect"
                          onChange={e =>
                            this.setState({ studentsAge: e.target.value })
                          }
                        >
                          <option disabled selected>
                            {data.user.age}
                          </option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </Input>
                      </FormGroup>

                      <Button color="primary">Update</Button>
                    </Form>
                   
                  </div>
                </div>

                <div className="badges my-5">
                  <div className="col-sm-12 ">
                    <Form inline onSubmit={this.updateStudentBadge}>
                      <FormGroup>
                        <Label for="exampleSelect">Badge Completion</Label>
                        <Input
                          type="select"
                          name="badge"
                          id="badgeSelect"
                          onChange={e =>
                            this.setState({
                              studentsID: data.user.id,
                              studentsName: data.user.name,
                              studentsAge: data.user.age,
                              awanaClassName: data.user.classId[0].classId,
                              studentBadge1:
                                data.user.badge1.length > 0 ? "1" : "",
                              studentBadge2:
                                data.user.badge2.length > 0 ? "2" : "",
                              studentBadge3:
                                data.user.badge3.length > 0 ? "3" : "",
                              studentBadge4:
                                data.user.badge4.length > 0 ? "4" : "",
                              studentBadge5:
                                data.user.badge5.length > 0 ? "5" : "",
                              studentBadge6:
                                data.user.badge6.length > 0 ? "6" : "",
                              checkSection: e.target.value
                            })
                          }
                        >
                          <option value="1">section 1</option>
                          <option value="2">section 2</option>
                          <option value="3">section 3</option>
                          <option value="4">section 4</option>
                          <option value="5">section 5</option>
                          <option value="6">section 6</option>
                        </Input>
                      </FormGroup>
                      <Button color="primary">Add Badge</Button>
                    </Form>
                  </div>
                  <div className="col-sm-12 badges">
                    <ul className="">
                      {data.user.badge1.length > 0 && (
                        <li>
                          <img
                            src={data.user.badge1[0].url}
                            className="img-responsive inline-block"
                            alt="Responsive image"
                            width="80"
                          />
                          <span className="ml-1 mr-4">
                            {data.user.badge1[0].name}
                          </span>
                        </li>
                      )}
                      {data.user.badge2.length > 0 && (
                        <li>
                          <img
                            src={data.user.badge2[0].url}
                            className="img-responsive inline-block"
                            alt="Responsive image"
                            width="80"
                          />
                          <span className="ml-1 mr-4">
                            {data.user.badge2[0].name}
                          </span>
                        </li>
                      )}
                      {data.user.badge3.length > 0 && (
                        <li>
                          <img
                            src={data.user.badge3[0].url}
                            className="img-responsive inline-block"
                            alt="Responsive image"
                            width="80"
                          />
                          <span className="ml-1 mr-4">
                            {data.user.badge3[0].name}
                          </span>
                        </li>
                      )}

                      {data.user.badge4.length > 0 && (
                        <li>
                          <img
                            src={data.user.badge4[0].url}
                            className="img-responsive inline-block"
                            alt="Responsive image"
                            width="80"
                          />
                          <span className="ml-1 mr-4">
                            {data.user.badge4[0].name}
                          </span>
                        </li>
                      )}
                      {data.user.badge5.length > 0 && (
                        <li>
                          <img
                            src={data.user.badge5[0].url}
                            className="img-responsive inline-block"
                            alt="Responsive image"
                            width="80"
                          />
                          <span className="ml-1 mr-4">
                            {data.user.badge5[0].name}
                          </span>
                        </li>
                      )}
                      {data.user.badge6.length > 0 && (
                        <li>
                          <img
                            src={data.user.badge6[0].url}
                            className="img-responsive inline-block"
                            alt="Responsive image"
                            width="80"
                          />
                          <span className="ml-1 mr-4">
                            {data.user.badge6[0].name}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

StudentProfile.propTypes = {};

export default compose(
  graphql(UPDATE_STUDENTINFO, { name: "UPDATE_STUDENTINFO" }),
  graphql(GET_STUDENT, {
    name: "GET_STUDENTS",
    options: props => ({ variables: { id: "5c046f5a1b04143ce674fb11" } })
  })
)(StudentProfile);
