import { container } from "tsyringe";
import CreateCursoUsecase from "../../../application/useCases/curso/createCurso/CreateCursoUseCase";
import ListCursosUsecase from "../../../application/useCases/curso/list/ListCursosUseCase";
import DeleteCursoUseCase from "../../../application/useCases/curso/deleteCurso/DeleteCursoUseCase";
import UpdateCursoUseCase from "../../../application/useCases/curso/updateCurso/UpdateCursoUseCase";
import FindCursoByIdUseCase from "../../../application/useCases/curso/findCursoById/FindCursoByIdUseCase";
import FindCursoDisciplinaByCursoIdUseCase from "../../../application/useCases/curso/findCursoDisciplinaByCursoIdUseCase.ts/FindCursoDisciplinaByCursoIdUseCase";
import AddListCursoDisciplinaUseCase from "../../../application/useCases/curso/addListCursoDisciplina/AddListCursoDisciplinaUseCase";
import FindProfessorCursoDisciplinaByCursoIdUseCase from "../../../application/useCases/professorCursoDisciplina/findProfessorCursoDisciplinaByCursoId/FindProfessorCursoDisciplinaByCursoIdUseCase";

export const queryApplicationCurso = {
  findAll_Curso: async () => {
    const listCursosUsecase = container.resolve(ListCursosUsecase);
    return listCursosUsecase.execute().catch((e) => {
      throw e;
    });
  },
  findById_Curso: async (parent: any, { id }) => {
    const findCursoByIdUseCase = container.resolve(FindCursoByIdUseCase);
    return findCursoByIdUseCase.execute(id).catch((e) => {
      throw e;
    });
  },
  findDisciplinaById_Curso: async (parent: any, { id }) => {
    const findCursoDisciplinaByCursoIdUseCase = container.resolve(
      FindCursoDisciplinaByCursoIdUseCase
    );
    return findCursoDisciplinaByCursoIdUseCase.execute(id).catch((e) => {
      throw e;
    });
  },
  findDisciplinaOfertadasById_Curso: async (parent: any, { id }) => {
    const findProfessorCursoDisciplinaByCursoIdUseCase = container.resolve(
      FindProfessorCursoDisciplinaByCursoIdUseCase
    );
    return findProfessorCursoDisciplinaByCursoIdUseCase.execute(id).catch((e) => {
      throw e;
    });
  },
};

export const mutationApplicationCurso = {
  createCurso: async (parent: any, { nome, id_departamento }) => {
    const createCursoUseCase = container.resolve(CreateCursoUsecase);
    return createCursoUseCase.execute({ nome, id_departamento }).catch((e) => {
      throw e;
    });
  },
  updateCurso: async (parent: any, { input }) => {
    const updateCursoUsecase = container.resolve(UpdateCursoUseCase);
    return updateCursoUsecase.execute(input).catch((e) => {
      throw e;
    });
  },
  deleteCurso: async (parent: any, { id }) => {
    const deleteCursoUseCase = container.resolve(DeleteCursoUseCase);
    return deleteCursoUseCase.execute(id).catch((e) => {
      throw e;
    });
  },
  addCursoDisciplina: async (parent: any, { id_curso, disciplina }) => {
    const addlistCursoDisciplinaUseCase = container.resolve(
      AddListCursoDisciplinaUseCase
    );
    return addlistCursoDisciplinaUseCase.execute(id_curso, disciplina).catch((e) => {
      throw e;
    });
  },
};
