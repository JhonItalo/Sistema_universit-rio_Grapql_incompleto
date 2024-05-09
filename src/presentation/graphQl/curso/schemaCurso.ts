import { queryApplicationCurso, mutationApplicationCurso } from "./applicationCurso";

const schemaCurso = `

type Curso {
id: String!
nome: String!
id_departamento: Int!
}

input updateCursoInput {
id: Int!
nome: String
id_departamento: Int
}
`;
const queryCurso = `
findAll_Curso: [Curso]!
findById_Curso(id: Int!): Curso!
findDisciplinaById_Curso(id: Int!): [CursoDisciplina]!
findDisciplinaOfertadasById_Curso(id: Int!): [ProfessorCursoDisciplina]!
`;
const mutationCurso = `
createCurso(nome: String!, id_departamento: Int!): Curso!
updateCurso(input: updateCursoInput!): Curso!
deleteCurso(id: Int!):  Boolean!
addCursoDisciplina(id_curso: Int!, disciplina: [Int]!): [CursoDisciplina]!
`;
export {
  schemaCurso,
  queryCurso,
  mutationCurso,
  queryApplicationCurso,
  mutationApplicationCurso,
};
