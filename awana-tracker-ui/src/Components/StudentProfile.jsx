import React, { Component } from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { graphql, Query } from "react-apollo";
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
const GET_STUDENT = gql`
  query User($id: ID!) {
    user(id:$id) {
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
  componentDidMount(){
    const { data} = this.props
    console.log(this.props.data)

  }
  render() {
 
    const { data, id, location} = this.props
    console.log('location ', location.state.id)
    console.log(data.variables)
   
    return (
      <Query query={GET_STUDENT} variables={{id:location.state.id}}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;

          return <div>
      <div id="student-profile" className="row text-center placeholders ">
        <div className="studentprofile mb-5">
          <h1>{data.user.name}</h1>
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
                  placeholder={data.user.name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="class">Class</Label>
                <Input
                  type="text"
                  name="class"
                  id="className"
                  placeholder={data.user.classId[0].name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input type="select" name="age" id="ageSelect">
                <option value="" disabled selected>{data.user.age}</option>

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
      </div>;
        }}
      </Query>
    );
  }
}

StudentProfile.propTypes = {};

export default graphql(GET_STUDENT,  {
  options: (props) => ({ variables: { id: "5c046f5a1b04143ce674fb11" } })
})(StudentProfile);
