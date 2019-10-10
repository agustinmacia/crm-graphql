import gql from 'graphql-tag'


export const obtenerClientes_QUERY = gql`{
    getClientes {
      id
      nombre
      apellido
      empresa
      edad
      pedidos {
        producto
      }
    }
  }`;

  export const obtenerCliente_QUERY = gql`

    query ConsultarClienteById($id: ID) {
      getCliente(id: $id) {
        nombre
        apellido
        empresa

      }
    }
  `;