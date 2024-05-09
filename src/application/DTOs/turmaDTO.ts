interface ICreateTurmaDTO {
  nome: string;
  id_curso: number;
}
interface IUpdateTurmaDTO {
  id: number;
  nome?: string;
  id_curso?: number;
}

export { ICreateTurmaDTO, IUpdateTurmaDTO };
