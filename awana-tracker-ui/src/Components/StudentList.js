import React, { Component } from "react";
import PropTypes from "prop-types";
let students = [
    {
      "name": "Aj Twiss",
      "gradeLevel": "Sparkies",
      "url": 'student-profile.html'
    }, {
      "name": "Caden Twiss",
      "gradeLevel": "T&T",
      "url": 'student-profile.html'
    },
    {
      "name": "Ava Twiss",
      "gradeLevel": "Sparkies",
      "url": 'student-profile.html'
    },
  ]
class StudentList extends Component {
  constructor(props){
    super(props);
      this.state = {
          students
      }
  }
      
  render() {
      const { students} = this.state
    return (
      <div>
        <main className=" col-sm-9 offset-sm-3 col-md-10 offset-md-2  bg-primary3 main">
          <h2>Student List </h2>

          <section className="row text-center placeholders">
         { students.map( (student) => (
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
                  <p className="card-text">{student.gradeLevel}</p>
                  <a href={student.url} className="btn btn-outline-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
           ))}
          </section>
        </main>
      </div>
    );
  }
}

StudentList.propTypes = {};

export default StudentList;
