import "./loadEnvirontment.js";
import type { NextFunction, Request, Response } from "express";
import CustomError from "../../CustomError/CustomError";
import jwt from "jsonwebtoken";

const tokkenMissingErorr = new CustomError(
  "Token is missing",
  401,
  "Token is missing"
);

const authentication = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      throw tokkenMissingErorr;
    }

    const token = authHeader.slice(7);

    if (!token) {
      throw tokkenMissingErorr;
    }

    jwt.verify(token, process.env.JWT_SECRET);
  } catch {}

  next(CustomError);
};

export default authentication;
