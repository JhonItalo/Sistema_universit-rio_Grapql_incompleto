import { gql } from 'apollo-server';

import {
	schemaAluno,
	queryALuno,
	mutationAluno,
	queryApplicationAluno,
	mutationApplicationAluno,
} from './aluno/schemaAluno';
import {
	schemaCurso,
	queryCurso,
	mutationCurso,
	queryApplicationCurso,
	mutationApplicationCurso,
} from './curso/schemaCurso';
import {
	schemaDisciplina,
	queryDisciplina,
	mutationDisciplina,
	queryApplicationDisciplina,
	mutationApplicationDisciplina,
} from './disciplina/schemaDisciplina';
import {
	schemaTurma,
	queryTurma,
	mutationTurma,
	queryApplicationTurma,
	mutationApplicationTurma,
} from './turma/schemaTurma';
import {
	schemaProfessor,
	queryProfessor,
	mutationProfessor,
	queryApplicationProfessor,
	mutationApplicationProfessor,
} from './professor/schemaProfessor';
import { schemaCursoDisciplina } from './cursoDisciplina/schemaCursoDisciplina';
import { schemaAlunoProfessorCursoDisciplina } from './alunoProfessorCursoDisciplina/schemaAlunoProfessorCursoDisciplina';
import { schemaProfessorCursoDisciplina } from './professorCursoDisciplina/schemaProfessorCursoDisciplina';

export const typeDefs = gql`

${schemaCurso}
${schemaDisciplina}
${schemaProfessor}
${schemaTurma}
${schemaAluno}
${schemaCursoDisciplina}
${schemaAlunoProfessorCursoDisciplina}
${schemaProfessorCursoDisciplina}


  type Query {
    ${queryCurso}
    ${queryDisciplina}
    ${queryProfessor}
    ${queryTurma}
    ${queryALuno}

  }

  type Mutation {
    ${mutationCurso}
    ${mutationDisciplina}
    ${mutationProfessor}
    ${mutationTurma}
    ${mutationAluno}
 
  }
`;
// red
export const resolvers = {
	Resolver: {
    
  },
	Query: {
		...queryApplicationCurso,
		...queryApplicationDisciplina,
		...queryApplicationProfessor,
		...queryApplicationTurma,
		...queryApplicationAluno,
	},
	Mutation: {
		...mutationApplicationCurso,
		...mutationApplicationDisciplina,
		...mutationApplicationProfessor,
		...mutationApplicationTurma,
		...mutationApplicationAluno,
	},
};
