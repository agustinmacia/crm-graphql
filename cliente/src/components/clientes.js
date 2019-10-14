//Mostrar listado de todos los clientes
import React, {Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';

import { obtenerClientes_QUERY } from '../queries/Clientes';
import { eliminarCliente_MUTATION} from '../mutations/Clientes';

import Paginador from './Paginador'

class Clientes extends Component{

    state = {
        paginador: {
            offset: 0,
            actual: 1
        }
    }

    render () {
        return (
            <Query query={obtenerClientes_QUERY} pollInterval={1000}>
                {({ loading, error, data, startPolling, stopPolling }) => {
                    if(loading) return "Cargando..";
                    if(error) return `Erro: ${error.message}`;
                    console.log(data.getClientes);
                    return (
                        <Fragment>
                            <h2 className="container">Listado Clientes</h2>
                            <ul className="list-group">
                                {data.getClientes.map(cliente => {
                                    const {id} = cliente;
                                    return(
                                        <li key={cliente.id} className="list-group-item">
                                            <div className="row justify-content-betwenn align-items-center">
                                                <div className="col-md-8 d-flex justify-content-betwenn align-items-center">
                                                    {cliente.nombre} {cliente.apellido} - {cliente.empresa}
                                                </div>
                                                <div className="col-md-4 d-flex justify-content-end">
                                                    <Mutation mutation={eliminarCliente_MUTATION}>
                                                        {eliminarCliente => (
                                                            <button type="button" className="btn btn-danger d-block d-md-inline-block mr-2" onClick={ () => {
                                                                if(window.confirm('¿Seguro que desea eliminar este cliente?')){
                                                                    eliminarCliente({
                                                                        variables: {id}
                                                                    })
                                                                }
                                                            }}> &times; Eliminar</button>
                                                        )}
                                                    </Mutation>
                                                    <Link to={`/cliente/editar/${cliente.id}`} className="btn btn-success d-block d-md-inline-block">
                                                        Editar Cliente
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                            <Paginador actual = {this.state.paginador.actual}/>
                        </Fragment>
                    )
                }}
            </Query>
        )
    }
}

export default Clientes;