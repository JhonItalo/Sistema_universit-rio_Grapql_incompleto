import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import './shared/container';
import { typeDefs, resolvers } from './presentation/graphQl/typeDefs';

/* async function conect() {
  await RedisClient.connect();
}
conect(); */

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(({ url }) => {
	console.log('start server port 4000');
});
/*   Aluno: {
      curso: ({ name }) => {
        findcursousecase(name),
      },
    },
    Curso: {
      professor: ({name})=>{
        findprofessorousecase(name)
      }
    },
 */
