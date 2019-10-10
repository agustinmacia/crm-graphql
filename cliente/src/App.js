import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Importo componentes
import Header from './components/Header';
import Clientes from './components/Clientes';
import EditarCliente from './components/EditarCliente';
import NuevoCliente from './components/NuevoCliente';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError : ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

//El router solo puede tener un hijo. Por lo tanto uso fragment para poder tener un header y un div. Uso Route para las distintas rutas

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Clientes} />
                <Route exact path="/cliente/editar/:id" component={EditarCliente} />
                <Route exact path="/cliente/nuevo" component={NuevoCliente} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ApolloProvider>
      );
  }
}

export default App;