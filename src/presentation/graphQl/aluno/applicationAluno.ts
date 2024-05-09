import { container } from "tsyringe";
import ListAlunoUseCase from "../../../application/useCases/aluno/list/ListAlunoUseCase";
import FindAlunoByCpfUseCase from "../../../application/useCases/aluno/findAlunoByCpf/FindAlunoByCpfUseCase";
import FindAlunoByIdUseCase from "../../../application/useCases/aluno/findAlunoById/FindALunoByIdUseCase";
import FindAlunoByEmailUseCase from "../../../application/useCases/aluno/findAlunoByEmail/FindAlunoByEmailUseCase";
import CreateAlunoUseCase from "../../../application/useCases/aluno/createAluno/CreateAlunoUseCase";
import ErrorHandle from "../../erros/ErrorHandle";
import UpdateAlunoUseCase from "../../../application/useCases/aluno/updateAluno/UpdateAlunoUseCase";
import DeleteAlunoUseCase from "../../../application/useCases/aluno/deleteAluno/DeleteAlunoUseCase";
import ChangeDisciplinaUseCase from "../../../application/useCases/aluno/changeDisciplina/ChangeDisciplinaUseCase";
import FindGradeByAlunoIdUseCase from "../../../application/useCases/aluno/findAlunoProfessorCursoDisciplinaByAlunoId/FindAlunoProfessorCursoDisciplinaByAlunoIdUseCase";
import { IUpdateAlunoDTO } from "../../../application/DTOs/alunoDTO";
import { ICreateAlunoDTO } from "../../../application/DTOs/alunoDTO";

export const queryApplicationAluno = {
  findAll_Aluno: async () => {
    const listAlunoUseCase = container.resolve(ListAlunoUseCase);
    return listAlunoUseCase.execute().catch((e) => {
      ErrorHandle(e);
    });
  },
  findByCpf_Aluno: async (parent: any, { cpf }: { cpf: string }) => {
    const findAlunoByCpfUseCase = container.resolve(FindAlunoByCpfUseCase);
    return findAlunoByCpfUseCase.execute(cpf).catch((e) => ErrorHandle(e));
  },
  findByEmail_Aluno: async (parent: any, { email }: { email: string }) => {
    const findAlunoByEmailUseCase = container.resolve(FindAlunoByEmailUseCase);
    return findAlunoByEmailUseCase.execute(email).catch((e) => ErrorHandle(e));
  },
  findById_Aluno: async (parent: any, { id }: { id: string }) => {
    const findALunoByIdUseCase = container.resolve(FindAlunoByIdUseCase);
    return findALunoByIdUseCase.execute(id).catch((e) => ErrorHandle(e));
  },
  findGradeById_Aluno: async (parent: any, { id }) => {
    console.log("id", id);

    const findGradeByAlunoIdUseCase = container.resolve(FindGradeByAlunoIdUseCase);
    return findGradeByAlunoIdUseCase.execute(id).catch((e) => ErrorHandle(e));
  },
};

export const mutationApplicationAluno = {
  createAluno: async (parent: any, { input }: { input: ICreateAlunoDTO }) => {
    const createAlunoUseCase = container.resolve(CreateAlunoUseCase);
    return createAlunoUseCase.execute(input).catch((e) => {
      throw e;
    });
  },
  updateAluno: async (parent: any, { input }: { input: IUpdateAlunoDTO }) => {
    const id = input.id;
    const updateUser = { email: input.email };
    const updateAlunoUseCase = container.resolve(UpdateAlunoUseCase);
    return updateAlunoUseCase.execute({ id, updateAluno: input, updateUser }).catch((e) => {
      throw e;
    });
  },
  deleteAluno: async (parent: any, { id }) => {
    const deleteAlunoUseCase = container.resolve(DeleteAlunoUseCase);
    return deleteAlunoUseCase.execute(id).catch((e) => {
      throw e;
    });
  },
  changeDisciplina: async (
    parent: any,
    { id, disciplina }: { id: string; disciplina: number[] }
  ) => {
    const changeDisciplinaUseCase = container.resolve(ChangeDisciplinaUseCase);
    return changeDisciplinaUseCase.execute(id, disciplina).catch((e) => {
      throw e;
    });
  },
};
