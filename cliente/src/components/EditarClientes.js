import React, { Component, Fragment } from 'react'
import { obtenerCliente_QUERY } from '../queries/Clientes'
import { Query } from 'react-apollo'

import EditarClienteForm from './EditarClienteForm';

//Tomar id del cliente a editar

class EditarCliente extends Component {
    state = { }
    
    render() {
        
        const { id } = this.props.match.params;

        console.log(id);

        return (
            <Fragment>
                <h2 className="text-center">Editar Cliente</h2>

                <Query query={obtenerCliente_QUERY} variables={{id}}>
                    {({loading, error, data}) => {
                        if(loading) return 'Obteniendo datos...';
                        if(error) return `Error ${error.message}`;

                        return (
                            <EditarClienteForm
                            
                            />
                        )
                    }}

                </Query>

            </Fragment>
        );
    }
}

export default EditarCliente;