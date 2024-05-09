import { container } from "tsyringe";
import ListTurmaUsecase from "../../../application/useCases/turma/list/ListTurmaUseCase";
import CreateTurmaoUsecase from "../../../application/useCases/turma/createTurma/CreateTurmaUseCase";
import { ICreateTurmaDTO, IUpdateTurmaDTO } from "../../../application/DTOs/turmaDTO";
import UpdateTurmaUseCase from "../../../application/useCases/turma/updateTurma/UpdateTurmaUseCase";
import DeleteTurmaUseCase from "../../../application/useCases/turma/deleteTurma/DeleteTurmaUseCase";

export const queryApplicationTurma = {
  findAll_Turma: async () => {
    const listTurmaUseCase = container.resolve(ListTurmaUsecase);
    return listTurmaUseCase.execute().catch((e) => {
      throw e;
    });
  },
};
export const mutationApplicationTurma = {
  createTurma: async (parent: any, { nome, id_curso }: ICreateTurmaDTO) => {
    const createTurmaUseCase = container.resolve(CreateTurmaoUsecase);
    return createTurmaUseCase.execute({ nome, id_curso }).catch((e) => {
      throw e;
    });
  },
  updateTurma: async (parent: any, { id, nome, id_curso }: IUpdateTurmaDTO) => {
    const updateTurmaUseCase = container.resolve(UpdateTurmaUseCase);
    return updateTurmaUseCase.execute({ id, nome, id_curso }).catch((e) => {
      throw e;
    });
  },
  deleteTurma: async (parent: any, { id }) => {
    const deleteTurmaUseCase = container.resolve(DeleteTurmaUseCase);
    return deleteTurmaUseCase.execute(id).catch((e) => {
      throw e;
    });
  },
};
