import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';


const users = [ {
  id: 1,
  name: "AJ Twiss",
  age: 40,
  userType: 'Teacher',
  class: 'T&T'

},
{
  id: 2,
  name: "Caden Twiss",
  age: 10,
  userType: 'Student',
  class: 'T&T'

},{
  id: 3,
  name: "Ava Twiss",
  age: 7,
  userType: 'Student',
  class: 'Sparkies'

}];
const columns = [{ 
  dataField: 'name',
  text: ' Name'
}, {
  dataField: 'age',
  text: 'Age'
},{
  dataField: 'userType',
  text: 'User Type'
},{
dataField: 'class',
text: 'AWANA Class'
}];
class ManageUsers extends Component {
  render() {
    return (
      <div id="Manage-Users" className="row text-center placeholders ">
        <div className="addUsers mb-5">
          <div className="col-sm-12 ">
            <Form inline>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="studentName"
                  placeholder="Frist & Last Name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="usertype">User Type</Label>
                <Input type="select" name="usertype" id="usertype">
                  <option>Teacher</option>
                  <option>Student</option>
                  <option>Admin</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="class">Class</Label>
                <Input type="select" name="class" id="class">
                  <option>Cubbies</option>
                  <option>Sparkies</option>
                  <option>T&T</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input type="select" name="age" id="ageSelect">
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

              <Button color="primary">Add User</Button>
            </Form>
          </div>
        </div>
   
        <div className="userDataTable my-5" />

        <div className="col-sm-12 ">
        <BootstrapTable keyField='id' data={ users } columns={ columns } cellEdit={ cellEditFactory({ mode: 'click' }) }/>
        
        </div>
        <div class="col-sm-12 badges">
          <ul class="" />
        </div>
      </div>
    );
  }
}

ManageUsers.propTypes = {};

export default ManageUsers;
