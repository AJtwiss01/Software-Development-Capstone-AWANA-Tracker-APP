import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

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
class StudentProfile extends Component {
  render() {
    return (
      <div id="student-profile" className="row text-center placeholders ">
        <div className="studentprofile mb-5">
          <h1>Students Profile</h1>
          <div className="col-sm-12">
            <img
              class="card-img-top m-auto"
              src="assets/img/userPlachoder.png"
              width="80px"
              alt="Card image"
            />
          </div>
          <div className="col-sm-12 ">
            <Form inline>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="studentName"
                  placeholder="Frist & Last Name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="class">Class</Label>
                <Input
                  type="text"
                  name="class"
                  id="className"
                  placeholder="Class"
                />
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

              <Button color="primary">Update</Button>
            </Form>
          </div>
        </div>

        <div className="badges my-5">
          <div className="col-sm-12 ">
            <Form inline>
              <FormGroup>
                <Label for="exampleSelect">Badge Completion</Label>
                <Input type="select" name="age" id="ageSelect">
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
          <div class="col-sm-12 badges">
            <ul class="">
              {Badges.map(badge => (
                <li>
                  <img
                    src={badge.url}
                    class="img-responsive inline-block"
                    alt="Responsive image"
                    width="80"
                  />
                  <span class="ml-1 mr-4">{badge.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

StudentProfile.propTypes = {};

export default StudentProfile;
