import React, { Component } from 'react';
import AppRoute from './config/routes'
import Navbar from './Components/Navbar'
import './styles/overrides.scss'; 


import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  
  render() {
    console.log(client)
    return (
      <ApolloProvider client={client}>
      <div className="bodyWrapper">
        
        <Navbar />
        <AppRoute />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
