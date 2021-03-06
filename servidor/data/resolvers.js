import mongoose from 'mongoose';
import {Clientes} from './db';
import { rejects } from 'assert';

export const resolvers = {
    Query: {
        getClientes : (root, {limite, offset}) => {
            return Clientes.find({}).limit(limite).skip(offset);
        },
        getCliente : (root, {id}) => {
            return new Promise ((resolve, object) => {
                Clientes.findById(id, (error, cliente) => {
                    if (error) rejects (error)
                    else resolve(cliente)
                });
            });
        },
        getTotalClientes : (root) => {
            return new Promise ((resolve, object) => {
                Clientes.countDocuments({}, (error, count) =>{
                    if (error) reject (error)
                    else resolve(count)
                })
            });
        }
    },
    Mutation: {
        crearCliente : (root, {input}) => {
            const nuevoCliente = new Clientes({
                nombre : input.nombre,
                apellido : input.apellido,
                empresa : input.empresa,
                emails : input.emails,
                edad : input.edad,
                tipo : input.tipo,
                pedidos : input.pedidos
            });

            nuevoCliente.id = nuevoCliente._id;

            return new Promise ((resolve, object) => {
                nuevoCliente.save((error) => {
                    if(error) rejects (error)
                    else resolve(nuevoCliente)
                })
            })

        },
        actualizarCliente : (root, {input}) => {
            return new Promise((resolve, object) =>{
                Clientes.findOneAndUpdate({ _id : input.id}, input, {new : true}, (error, cliente) => {
                    if(error) rejects(error)
                    else resolve(cliente)
                });
            });
        },
        eliminarCliente : (root, {id}) => {
            return new Promise ((resolve, object) => {
                Clientes.findOneAndDelete({_id : id}, (error) => {
                    if(error) rejects(error)
                    else resolve("Se elimino correctamente")
                })
            })
        }
    }
}
//El resolver nos va a dar los resultados de las consultas

