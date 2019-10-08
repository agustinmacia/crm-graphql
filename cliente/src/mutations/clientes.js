import gql from 'graphql-tag';

export const nuevoCliente_MUTATION = gql`
mutation crearCliente($input: ClienteInput) {
    crearCliente(input: $input) {
      id
      nombre
      apellido
    }
  }
`;