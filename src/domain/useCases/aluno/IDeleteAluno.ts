interface IDeleteAluno {
  execute(id: string): Promise<Boolean>;
}
export { IDeleteAluno };
