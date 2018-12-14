import React, { Component } from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { graphql, Query, Mutation } from "react-apollo";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { timingSafeEqual } from "crypto";

const Badges = [
  {
    name: "Section 1",
    url: "assets/img/badge1.png"
  },
  {
    name: "Section 2",
    url: "assets/img/badge1.png"
  },
  {
    name: "Section 3",
    url: "assets/img/badge1.png"
  },
  {
    name: "Seciton 4",
    url: "assets/img/badge1.png"
  }
];
const GET_STUDENT = gql`
  query User($id: ID!) {
    user(id: $id) {
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
const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;
class StudentProfile extends Component {
 state = {
      studentsID: "",
      studentsName: "",
      studentsAge: "",
      awanaClassName: "",
      studentsBadge: ""
  }

  componentDidMount() {
    const { data } = this.props;
    console.log(this.props.data);
  }
  updatesStudent = event => {
    event.preventDefault();
    console.log("clicked");
    console.log(this.state);
  };
  updateStudentBadge = event => {
    event.preventDefault();
    console.log("clicked");
    console.log(this.state);
  };
  render() {
    const { data, id, location } = this.props;
    console.log("location ", location.state.id);
    console.log(data.variables);

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
                            this.setState({ studentsName: e.target.value, studentsID: data.user.Id })
                          }
                          placeholder={data.user.name}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="classes">Class</Label>
                        <Input
                          type="text"
                          name="classes"
                          id="classes"
                          onChange={e =>
                            this.setState({ awanaClassName: e.target.value })
                          }
                          placeholder={data.user.classId[0].name}
                        />
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
                          <option value=" disabled selected">
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
                          name="age"
                          id="ageSelect"
                          onChange={e =>
                            this.setState({ studentsBadge: e.target.value })
                          }
                        >
                          <option>section 1</option>
                          <option>section 2</option>
                          <option>section 3</option>
                          <option>section 4</option>
                          <option>section 5</option>
                          <option>section 6</option>
                          <option>section 7</option>
                          <option>section 8</option>
                          <option>section 9</option>
                          <option>section 10</option>
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

export default graphql(GET_STUDENT, {
  options: props => ({ variables: { id: "5c046f5a1b04143ce674fb11" } })
})(StudentProfile);
