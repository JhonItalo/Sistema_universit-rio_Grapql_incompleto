//import { IHttpResponse } from "../protocols/http";
import DataConflictError from "./DataConflictError";
import DataNotFoundError from "./DataNotFoundError";
import ForbiddenError from "./ForbiddenError";
import UnauthorizedError from "./UnauthorizedError";

interface IResolve {
  response: null;
  error: string;
}

const resolve = (message: string): IResolve => {
  return {
    response: null,
    error: message,
  };
};

const ErrorHandle = (error: Error) => {
  const erros = [DataConflictError, DataNotFoundError, ForbiddenError, UnauthorizedError];

  erros.forEach((item) => {
    if (error instanceof item) {
      throw new Error(error.message);
    }
  });
  throw new Error("Requisição invalida");
};

export default ErrorHandle;
