import express from 'express';
import graphqlHTTP from 'express-graphql';
import {schema} from './data/schema';

const application = express();

application.get('/', (request, response) => {
    response.send("Todo Listo");
});
application.use('/graphql', graphqlHTTP({
    //le pasamos el schema
    schema,

    //utilizar graphical
    graphiql: true

}));

application.listen(3000, () => {
    console.log("El servidor funciona correctamente");
});