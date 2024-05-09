import { queryApplicationDisciplina, mutationApplicationDisciplina } from "./applicationDisciplina";

const schemaDisciplina = `

type Disciplina {
id: String!
nome: String!
carga_horaria: Int!
}


`;
const queryDisciplina = `
findAll_Disciplina: [Disciplina]!
`;
const mutationDisciplina = `
createDisciplina(nome: String!, carga_horaria: Int!): Disciplina!
updateDisciplina(id: Int!, nome: String, carga_horaria: Int): Disciplina!
deleteDisciplina(id: Int!):  Boolean!

`;
export {
  schemaDisciplina,
  queryDisciplina,
  mutationDisciplina,
  queryApplicationDisciplina,
  mutationApplicationDisciplina,
};
