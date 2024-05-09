import { injectable, inject } from "tsyringe";
import { IDisciplinaRepository } from "../../../../domain/repositories/IDisciplinaRepository";
import { IDeleteDisciplina } from "../../../../domain/useCases/disciplina/IDeleteDisciplina";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { DisciplinaNotFound } from "../../../../presentation/erros/Constants";

@injectable()
class DeleteDisciplinaUseCase implements IDeleteDisciplina {
  constructor(
    @inject("DisciplinaRepository") private disciplinaRepository: IDisciplinaRepository
  ) {}

  async execute(id: number): Promise<boolean> {
    const disciplina = await this.disciplinaRepository.findBy({ id });
    if (!disciplina) {
      throw new DataNotFoundError(DisciplinaNotFound);
    }
    await this.disciplinaRepository.delete(id);

    return true;
  }
}

export default DeleteDisciplinaUseCase;
