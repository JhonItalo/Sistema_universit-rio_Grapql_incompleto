interface IDeleteTurma {
  execute(id: number): Promise<boolean>;
}
export { IDeleteTurma };
