interface IDeleteProfessor {
  execute(id: string): Promise<boolean>;
}
export { IDeleteProfessor };
