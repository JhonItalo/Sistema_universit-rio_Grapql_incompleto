import { container } from "tsyringe";
import ListDisciplinaUsecase from "../../../application/useCases/disciplina/list/ListDisciplinaUseCase";
import CreateDisciplinaUsecase from "../../../application/useCases/disciplina/createDisciplina/CreateDisciplinaUseCase";
import UpdateDisciplinaUseCase from "../../../application/useCases/disciplina/updateDisciplina/UpdateDisciplinaUseCase";
import DeleteDisciplinaUseCase from "../../../application/useCases/disciplina/deleteDisciplina/DeleteDisciplinaUseCase";
import {
  ICreateDisciplinaDTO,
  IUpdateDisciplinaDTO,
} from "../../../application/DTOs/disciplinaDTO";

const queryApplicationDisciplina = {
  findAll_Disciplina: async () => {
    const listDisciplinaUseCase = container.resolve(ListDisciplinaUsecase);
    return listDisciplinaUseCase.execute().catch((e) => {
      throw e;
    });
  },
};

const mutationApplicationDisciplina = {
  createDisciplina: async (parent: any, { nome, carga_horaria }: ICreateDisciplinaDTO) => {
    const createDisciplinaUseCase = container.resolve(CreateDisciplinaUsecase);
    return createDisciplinaUseCase.execute({ nome, carga_horaria }).catch((e) => {
      throw e;
    });
  },
  updateDisciplina: async (parent: any, { id, nome, carga_horaria }: IUpdateDisciplinaDTO) => {
    const updateDisciplinaUseCase = container.resolve(UpdateDisciplinaUseCase);
    return updateDisciplinaUseCase.execute({ id, nome, carga_horaria }).catch((e) => {
      throw e;
    });
  },
  deleteDisciplina: async (parent: any, { id }) => {
    const deleteDisciplinaUseCase = container.resolve(DeleteDisciplinaUseCase);
    return deleteDisciplinaUseCase.execute(id).catch((e) => {
      throw e;
    });
  },
};
export { queryApplicationDisciplina, mutationApplicationDisciplina };
