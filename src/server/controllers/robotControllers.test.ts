import type { NextFunction, Response } from "express";
import Robot from "../../database/models/Robot";
import mockRobot from "../../mocks/mockRobot";
import { getRobots } from "./robotsControllers";

beforeEach(() => jest.clearAllMocks());

const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn().mockReturnThis(),
};
const next = jest.fn();

describe("Given a getRobots controller", () => {
  describe("When it receives a request/response and methode find responds ", () => {
    test("Then it should call its method status with a 200 code ", async () => {
      const statusCode = 200;

      Robot.find = jest.fn();
      await getRobots(null, res as Response, null);

      expect(res.status).toHaveBeenCalledWith(statusCode);
    });

    test("Then it should call its method json ", async () => {
      Robot.find = jest.fn().mockReturnValueOnce(mockRobot);

      await getRobots(null, res as Response, null);

      expect(res.json).toHaveBeenCalledWith({ robots: mockRobot });
    });
  });

  describe("When it receives a request/response and methode find rejects ", () => {
    test("Then it should call CustomError fucntion", async () => {
      Robot.find = jest.fn().mockRejectedValueOnce(new Error(""));

      await getRobots(null, res as Response, next as NextFunction);

      expect(next).toHaveBeenCalled();
    });
  });
});
