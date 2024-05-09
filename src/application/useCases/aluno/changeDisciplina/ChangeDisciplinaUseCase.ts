import { inject, injectable } from "tsyringe";
import { IAlunoProfessorCursoDisciplinaRepository } from "../../../../domain/repositories/IAlunoProfessorCursoDisciplina";
import { IChangeDisciplina } from "../../../../domain/useCases/alunoProfessorCursoDisciplina/IChangeDisciplina";
import { AlunoProfessorCursoDisciplina } from "@prisma/client";

@injectable()
class ChangeDisciplinaUseCase implements IChangeDisciplina {
  constructor(
    @inject("AlunoProfessorCursoDisciplinaRepository")
    private alunoProfessorCursoDisciplinaRepository: IAlunoProfessorCursoDisciplinaRepository
  ) {}

  async execute(
    id_aluno: string,
    disciplina: number[]
  ): Promise<AlunoProfessorCursoDisciplina[]> {
    const disciplinasCadastradas =
      await this.alunoProfessorCursoDisciplinaRepository.findByMany({
        id_aluno,
      });

    const disciplinasCadastradasIdArray = disciplinasCadastradas.map(
      (item) => item.id_professorCursoDisciplina
    );

    let RemoveUnselectedDisciplinas: number[] = disciplinasCadastradasIdArray.filter(
      (num: number) => !disciplina.includes(num)
    );

    const addNewDisciplinas: number[] = disciplina.filter(
      (num: number) => !disciplinasCadastradasIdArray.includes(num)
    );

    return await this.alunoProfessorCursoDisciplinaRepository.changeDisciplina(
      id_aluno,
      RemoveUnselectedDisciplinas,
      addNewDisciplinas
    );
  }
}
export default ChangeDisciplinaUseCase;
