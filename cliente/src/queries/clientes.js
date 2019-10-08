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