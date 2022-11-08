import "../../loadEnvirontment.js";
import type { Request, Response } from "express";

import jwt from "jsonwebtoken";

const loginUser = (req: Request, res: Response) => {
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign({}, secret);

  res.status(201).json({ token });
};

export default loginUser;
