import type { Request, Response } from "express";
import { Robot } from "../database/models/Robot";

export const getRobots = async (req: Request, res: Response) => {
  const robots = await Robot.find();
  res.status(200).json({ robots });
};

export const getRobotsById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const robot = await Robot.findById(id);
  if (!robot) {
    res.status(404).json({ error: "Robot not found" });
    return;
  }

  res.status(200).json({ robot });
};
