import { queryApplicationTurma, mutationApplicationTurma } from "./applicationTurma";

const schemaTurma = `
type Turma {
id: String!
nome: String!
id_curso: Int!
}
`;
const queryTurma = `
findAll_Turma: [Turma]!
`;
const mutationTurma = `
createTurma(nome: String!, id_curso: Int!): Turma!
updateTurma(id: Int!, nome: String, id_curso: Int): Turma!
deleteTurma(id: Int!):  Boolean!

`;
export { schemaTurma, queryTurma, mutationTurma, queryApplicationTurma, mutationApplicationTurma };
