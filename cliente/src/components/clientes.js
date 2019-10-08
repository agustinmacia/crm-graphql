//Mostrar listado de todos los clientes
import React, { Fragment } from 'react';
import { Query } from 'react-apollo';

import { obtenerClientes_QUERY } from '../queries/clientes';

const Clientes = () => (
    <Query query={obtenerClientes_QUERY} >
    {({ loading, error, data }) => {
        if(loading) return "Cargando..";
        if(error) return `Erro: ${error.message}`;
        console.log(data.getClientes);
        return (
            <Fragment>
                <h2 className="container">Listado Clientes</h2>
                <ul className="list-group">
                    {data.getClientes.map(cliente => (
                        <li key={cliente.id} className="list-group-item">
                            <div className="row justify-content-betwenn align-items-center">
                                <div className="col-md-8 d-flex justify-content-betwenn align-items-center">
                                    {cliente.nombre} {cliente.apellido}
                                </div>
                                <div className="col-md-4 d-flex justify-content-end">
                                    <a className="btn btn-success d-block d-md-inline-block">
                                        Editar Cliente
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </Fragment>
        )
    }}
    </Query>
)

export default Clientes;