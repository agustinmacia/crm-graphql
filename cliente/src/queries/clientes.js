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
    getTotalClientes
  }`;

  export const obtenerCliente_QUERY = gql`

    query ConsultarClienteById($id: ID) {
      getCliente(id: $id) {
        id
        nombre
        apellido
        empresa
        edad
        tipo
        emails {
          email
        }
      }
    }
  `;