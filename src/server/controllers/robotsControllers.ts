import type { NextFunction, Request, Response } from "express";
import CustomError from "../../CustomError/CustomError.js";
import Robot from "../../database/models/Robot.js";

export const getRobots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const robots = await Robot.find();
    res.status(200).json({ robots });
  } catch (error: unknown) {
    const customError = new CustomError(
      (error as Error).message,
      500,
      "Database error"
    );
    next(customError);
  }
};

export const getRobotById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const robot = await Robot.findById(id);
    if (!robot) {
      res.status(404).json({ error: "Robot not found" });
      return;
    }

    res.status(200).json({ robot });
  } catch (error: unknown) {
    const customError = new CustomError(
      (error as Error).message,
      500,
      "Database error"
    );
    next(customError);
  }
};

export const addRobot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newRobot = await Robot.create(req.body);
    res.status(201).json(newRobot);
  } catch (error: unknown) {
    const customError = new CustomError(
      (error as Error).message,
      500,
      "Database error"
    );
    next(customError);
  }
};

export const deleteRobotbyId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { idRobot } = req.params;

  try {
    const robot = await Robot.findById(idRobot);

    if (!robot) {
      res.status(404).json({ message: "Robot not found" });
      return;
    }

    await Robot.findByIdAndDelete(idRobot);
    res.status(200).json({ robot });
  } catch (error: unknown) {
    const customError = new CustomError(
      (error as Error).message,
      500,
      "Database error"
    );

    next(customError);
  }
};

export const updateRobot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { _id } = req.body;

  try {
    const robot = await Robot.findById(_id);

    if (!robot) {
      res.status(404).json({ message: "Robot not found" });
      return;
    }

    await Robot.findByIdAndUpdate(_id, req.body);
    res.status(200).json(req.body);
  } catch (error: unknown) {
    const customError = new CustomError(
      (error as Error).message,
      500,
      "Database error updating"
    );
    next(customError);
  }
};
