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
export const actualizarCliente_MUTATION = gql`
mutation actualizarCliente($input: ClienteInput){
    actualizarCliente(input: $input) {
      id
      nombre
      apellido
      edad
      empresa
      tipo
      emails {
        email
      } 
    }
}`;

export const eliminarCliente_MUTATION = gql `
mutation eliminarCliente($id: ID!) {
  eliminarCliente(id: $id)
}
`;