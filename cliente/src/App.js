import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

//Importo componentes
import Header from './components/Header';
import Clientes from './components/clientes';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError : ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Clientes />
        </div>
      </ApolloProvider>
      );
  }
}

export default App;