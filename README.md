# Software-Development-Capstone-AWANA-Tracker-APP
My final Capstone Project for My Masters in software development

### Application is built with using GraphQL, React and GraphDB neo4j
### This Application a tool for the AWANA program to track students attendance and level progression.

The AWANA Tracker application performs the following:
1. Add users with roles.
2. Gives the Teacher ability to check students in for attendance.
3. Give the Teacher the ability to assin badge level completions. 

### Clone Repo 
```
https://github.com/AJtwiss01/Software-Development-Capstone-AWANA-Tracker-APP.git
```

### Running AWANA Tracker UI 


Navigate in teminal ot UI 
```
cd awana-tracker-ui/

```
Then install react UI
using npm 

```
npm i 

```
Run App

```
npm run start 
```

Navigate to 


http://localhost:3000/

##UI Routes

#http://localhost:3000/classes

#http://localhost:3000/students

#http://localhost:3000/student-profile

#http://localhost:3000/manage-users

### Running AWANA Tracker Service/API
first install Nodemon global to edit with out reloads
```
npm install -g nodemon
```
# navigate to below:
```
cd awana-tracker-api
```
# run 
```
npm i
```
```
nodemon app.js
```
### Navicate to http://localhost:4000/graphql

copy and paste: 
```
{
 users{
  id
  name
  userType
 }
  classes{
    id
    name
  }
  badges{
    id
    name
  }
}
```
and run query to test API
