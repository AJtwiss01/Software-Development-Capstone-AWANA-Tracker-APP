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