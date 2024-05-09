interface IDeleteDisciplina {
  execute(id: number): Promise<boolean>;
}
export { IDeleteDisciplina };
