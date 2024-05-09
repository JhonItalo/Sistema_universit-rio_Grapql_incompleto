import { queryApplicationAluno, mutationApplicationAluno } from "./applicationAluno";

const schemaAluno = `

type Aluno {
    id: String!
    nome: String!
    email: String!
    cpf: String!
    sexo: String!
    telefone: String!
    createtAt: Date
    id_turma: Int!
    id_curso: Int!
    curso: Curso
    turma: Turma
  }

  scalar Date
  enum Sexo {
    M
    F
  }
  
input createAlunoInput {
  nome: String!
  email: String!
  cpf: String!
  sexo: Sexo!
  telefone: String!
  id_turma: Int!
  id_curso: Int!
  }

input updateAlunoInput {
  id: String!
  nome: String
  email: String
  sexo: String
  telefone: String
  id_turma: Int
  id_curso: Int
}
`;

const queryALuno = `
findAll_Aluno: [Aluno]!
findByCpf_Aluno(cpf: String!): Aluno!
findByEmail_Aluno(email: String!): Aluno!
findById_Aluno(id: String!): Aluno!
findGradeById_Aluno(id: String!): [AlunoProfessorCursoDisciplina]!
`;

const mutationAluno = `
createAluno(input: createAlunoInput!): Aluno!
updateAluno(input: updateAlunoInput! ): Aluno!
deleteAluno(id: String!): Boolean!
changeDisciplina(id: String!, disciplina: [Int]!): [AlunoProfessorCursoDisciplina]!
`;
export { schemaAluno, queryALuno, mutationAluno, queryApplicationAluno, mutationApplicationAluno };
