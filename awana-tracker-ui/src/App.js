import React, { Component } from 'react';
import AppRoute from './config/routes'
import './styles/overrides.scss'; 


import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


const client = new ApolloClient({
  uri: process.env.GRAPHQL || "https://awana-app-tracker-api.herokuapp.com/graphql"
});

class App extends Component {
  
  render() {
    console.log(client)
    return (
      <ApolloProvider client={client}>
      <div className="bodyWrapper">
        
        <AppRoute />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
