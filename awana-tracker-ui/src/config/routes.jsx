import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "../Containers/index";
import ClassList from "../Components/ClassList";
import SideBar from "../Components/SideBar";
import StudentList from "../Components/StudentList";
import Admin from "../Components/ManageUsers";
import StudentProfile from "../Components/StudentProfile";
import ManageUsers from "../Components/ManageUsers";

const AppRoute = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route
        exact
        path="/admin"
        render={props => (
          <div class="container-fluid">
            <div className="row">
              <SideBar />
              <main class=" col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-5 bg-primary3 main">
                <Admin {...props} isAuthed={true} />
              </main>
            </div>
          </div>
        )}
      />
      <Route
        exact
        path="/classes"
        render={props => (
          <div >
            <div className="row">
              <SideBar />
              <main class=" col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-5 bg-primary3 main">
                <ClassList {...props} isAuthed={true} />
              </main>
            </div>
          </div>
        )}
      />
      <Route
        exact
        path="/students"
        render={props => (
          <div >
            <div className="row">
              <SideBar />
              <main class=" col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-5 bg-primary3 main">
                <StudentList {...props} isAuthed={true} />
              </main>
            </div>
          </div>
        )}
      />
      <Route
        exact
        path="/student-profile"
        render={props => (
          <div >
            <div className="row">
              <SideBar />
              <main class=" col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-5 bg-primary3 main">
                <StudentProfile {...props} isAuthed={true} />
              </main>
            </div>
          </div>
        )}
      />
       <Route
        exact
        path="/manage-users"
        render={props => (
          <div >
            <div className="row">
              <SideBar />
              <main class=" col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-5 bg-primary3 main">
                <ManageUsers {...props} isAuthed={true} />
              </main>
            </div>
          </div>
        )}
      />
    </Switch>
  </Router>
);

export default AppRoute;
