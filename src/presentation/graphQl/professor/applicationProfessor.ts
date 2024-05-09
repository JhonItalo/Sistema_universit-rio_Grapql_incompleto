import { container } from "tsyringe";
import ListProfessorUseCase from "../../../application/useCases/professor/list/ListProfessorUseCase";
import {
  ICreateProfessorDTO,
  IUpdateProfessorDTO,
} from "../../../application/DTOs/professorDTO";
import CreateProfessorUseCase from "../../../application/useCases/professor/createProfessor/CreateProfessorUseCase";
import UpdateProfessorUseCase from "../../../application/useCases/professor/updateProfessor/UpdateProfessorUseCase";
import DeleteProfessorUseCase from "../../../application/useCases/professor/deleteProfessor/DeleteProfessorUseCase";
import AddListProfessorCursoDisciplinaUseCase from "../../../application/useCases/professorCursoDisciplina/addListProfessorCursoDisciplina/AddListProfessorCursoDisciplinaUseCase";
import FindProfessorCursoDisciplinaByProfessorIdUsecase from "../../../application/useCases/professorCursoDisciplina/findProfessorCursoDisciplinaByProfessorId/FindProfessorCursoDisciplinaByProfessorIdUsecase";
import FindProfessorByCpfUseCase from "../../../application/useCases/professor/findProfessorByCpf/FindByCpfProfessorUseCase";
import FindProfessorByEmailUseCase from "../../../application/useCases/professor/findProfessorByEmail/FindByEmailProfessorUseCase";

export const queryApplicationProfessor = {
  findAll_Professor: async () => {
    const listProfessorUseCase = container.resolve(ListProfessorUseCase);
    return listProfessorUseCase.execute().catch((e) => {
      throw e;
    });
  },
  findByCpf_Professor: async (parent: any, { cpf }) => {
    const findProfessorByCpfUseCase = container.resolve(FindProfessorByCpfUseCase);
    return findProfessorByCpfUseCase.execute(cpf).catch((e) => {
      throw e;
    });
  },
  findByEmail_Professor: async (parent: any, { email }) => {
    const findProfessorByEmailUseCase = container.resolve(FindProfessorByEmailUseCase);
    return findProfessorByEmailUseCase.execute(email).catch((e) => {
      throw e;
    });
  },
  findDisciplinaById_Professor: async (parent: any, { id }) => {
    const findProfessorCursoDisciplinaByProfessorIdUsecase = container.resolve(
      FindProfessorCursoDisciplinaByProfessorIdUsecase
    );
    return findProfessorCursoDisciplinaByProfessorIdUsecase.execute(id).catch((e) => {
      throw e;
    });
  },
};

export const mutationApplicationProfessor = {
  createProfessor: async (parent: any, { input }: { input: ICreateProfessorDTO }) => {
    const createProfessorUseCase = container.resolve(CreateProfessorUseCase);
    return createProfessorUseCase.execute(input).catch((e) => {
      throw e;
    });
  },
  updateProfessor: async (parent: any, { input }: { input: IUpdateProfessorDTO }) => {
    const id = input.id;
    const updateUser = { email: input.email };
    const updateProfessor = input;
    const updateProfessorUseCase = container.resolve(UpdateProfessorUseCase);
    return updateProfessorUseCase
      .execute({ id, updateProfessor, updateUser })
      .catch((e) => {
        throw e;
      });
  },
  deleteProfessor: async (parent: any, { id }) => {
    const deleteProfessorUseCase = container.resolve(DeleteProfessorUseCase);
    return deleteProfessorUseCase.execute(id).catch((e) => {
      throw e;
    });
  },
  addProfessorCursoDisciplina: async (parent: any, { id, cursoDisciplina }) => {
    const addListProfessorCursoDisciplinaUseCase = container.resolve(
      AddListProfessorCursoDisciplinaUseCase
    );
    return addListProfessorCursoDisciplinaUseCase
      .execute(id, cursoDisciplina)
      .catch((e) => {
        throw e;
      });
  },
};
