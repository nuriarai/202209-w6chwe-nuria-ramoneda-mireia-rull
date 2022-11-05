import type { Response } from "express";
import { notFoundError } from "./error";

describe("Given a notFoundError middleware", () => {
  describe("When it receives a response", () => {
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    test("Then it should call its method status with a 404", () => {
      const statusCode = 404;
      notFoundError(null, res as Response);

      expect(res.status).toHaveBeenCalledWith(statusCode);
    });

    test("Then it should call its method json with 'unknown enpoint'", () => {
      const expectedErrorMessage = { message: "unknown enpoint" };
      notFoundError(null, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
