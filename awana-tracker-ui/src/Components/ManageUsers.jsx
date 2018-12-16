import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

import { gql } from "apollo-boost";
import { graphql, Query, Mutation, compose, refetchQueries} from "react-apollo";
import { ALL_USER_AGE_MAX } from "../constants";

const columns = [
  {
    dataField: "name",
    text: " Name"
  },
  {
    dataField: "age",
    text: "Age"
  },
  {
    dataField: "userType",
    text: "User Type"
  },
  {
    dataField: "classId[0].name",
    text: "AWANA Class"
  }
];

const GET_ALLUSERS = gql`
  {
    users {
      id
      name
      age
      userType
      classId {
        name
      }
    }
  }
`;

const ADD_USERS = gql`
mutation($name: String!, $age: Int!, $userType: String!, $classId: String!){
  addUser(name: $name, age:$age, userType: $userType,classId: $classId, ){
    name
    age
    userType
    classId{
      classId
      name
    }
  }
} 
`;

class ManageUsers extends Component {
  addNewUser = event => {
    event.preventDefault();
    console.log("add user", event);
    console.log(this.state);
    this.props.ADD_USERS({
      variables:{
        name: this.state.userName,
        age: parseInt(this.state.userAge),
        userType: this.state.userType,
        classId: this.state.userClass
      },
      refetchQueries:[{query: GET_ALLUSERS}]
    })
  };

  render() {
    const { data } = this.props;
    let arr = [];
    const ageOptions = () => {
      for (let i = 1; i < ALL_USER_AGE_MAX; i++) {
        arr.push(<option key={i}>{i}</option>);
      }
      return arr;
    };
    ageOptions();
    return (
      <div>
        <Query query={GET_ALLUSERS}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
              <div id="Manage-Users" className="row text-center placeholders ">
                <div className="addUsers mb-5">
                  <div className="col-sm-12 ">
                    <Form inline onSubmit={this.addNewUser}>
                      <FormGroup>
                        <Label for="exampleEmail">Name</Label>
                        <Input
                          type="text"
                          name="name"
                          id="studentName"
                          placeholder="Frist &amp; Last Name"
                          onChange={e =>
                            this.setState({ userName: e.target.value })
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="usertype">User Type</Label>
                        <Input
                          type="select"
                          name="usertype"
                          id="usertype"
                          onChange={e =>
                            this.setState({ userType: e.target.value })
                          }
                        >
                          <option>Teacher</option>
                          <option>Student</option>
                          <option>Leader</option>
                        </Input>
                      </FormGroup>

                      <FormGroup>
                        <Label for="class">Class</Label>
                        <Input
                          type="select"
                          name="class"
                          id="class"
                          onChange={e =>
                            this.setState({ userClass: e.target.value })
                          }
                        >
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
                            this.setState({ userAge: e.target.value })
                          }
                        >
                          {arr.map(options => options)}
                        </Input>
                      </FormGroup>

                      <Button color="primary">Add User</Button>
                    </Form>
                  </div>
                </div>

                <div className="userDataTable my-5" />

                <div className="col-sm-12 ">
                  <BootstrapTable
                    keyField="id"
                    data={data.users.map(user => user)}
                    columns={columns}
                    cellEdit={cellEditFactory({ mode: "click" })}
                  />
                </div>
                <div class="col-sm-12 badges">
                  <ul class="" />
                </div>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

ManageUsers.propTypes = {};

export default compose(
  graphql(ADD_USERS, {name: "ADD_USERS"}),
  graphql(GET_ALLUSERS, {name: "GET_ALLUSERS"})
  )(ManageUsers);
