interface IDeleteCurso {
  execute(id: number): Promise<boolean>;
}
export { IDeleteCurso };
