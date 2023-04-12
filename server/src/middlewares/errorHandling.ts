import { Request, Response, NextFunction } from "express";

const errorHandlingMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("An error occured: ", err.message);
  res.status(500).json({
    message: err.message,
  });
};

export default errorHandlingMiddleware;
