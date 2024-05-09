import { queryApplicationProfessor, mutationApplicationProfessor } from "./applicationProfessor";

const schemaProfessor = `

type Professor {
    id: String!
    nome: String!
    email: String!
    cpf: String!
    sexo: String!
    telefone: String!
    createtAt: Date!
    id_departamento: Int!
  }

  scalar Date
  enum Sexo {
    M
    F
  }
  
input createProfessorInput {
  nome: String!
  email: String!
  cpf: String!
  sexo: Sexo!
  telefone: String!
  id_departamento: Int!
  }

input updateProfessorInput {
  id: String!
  nome: String
  email: String
  sexo: String
  telefone: String
  id_departamento: Int
}
`;

const queryProfessor = `
findAll_Professor: [Professor]!
findByCpf_Professor(cpf: String!): Professor!
findByEmail_Professor(email: String!): Professor!
findDisciplinaById_Professor(id: String!): [ProfessorCursoDisciplina]!
`;

const mutationProfessor = `
createProfessor(input: createProfessorInput!): Professor!
updateProfessor(input: updateProfessorInput! ): Professor!
deleteProfessor(id: String!): Boolean!
addProfessorCursoDisciplina(id: String!, cursoDisciplina: [Int]!): [ProfessorCursoDisciplina]!
`;
export {
  schemaProfessor,
  queryProfessor,
  mutationProfessor,
  queryApplicationProfessor,
  mutationApplicationProfessor,
};
