import type { Response } from "express";
import CustomError from "../../CustomError/CustomError";
import { notFoundError, generalError } from "./error";

beforeEach(() => {
  jest.clearAllMocks();
});

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

describe("Given a generalError middleware", () => {
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
  describe("When it receives a response", () => {
    test("Then it should call its method status with the received status code", () => {
      const statusCode = 400;
      const error = new CustomError("", 400, "");
      generalError(error, null, res as Response, () => {});

      expect(res.status).toHaveBeenCalledWith(statusCode);
    });

    test("Then it should call its method json with 'We don't have this robot'", () => {
      const publicMessage = "We don't have this robot";
      const error = new CustomError("", 400, publicMessage);
      const expectedPublicMessage = { error: publicMessage };

      generalError(error, null, res as Response, () => {});

      expect(res.json).toHaveBeenCalledWith(expectedPublicMessage);
    });
  });

  describe("When it's invoked with an empty status code", () => {
    test("Then it should call its default 500 method status", () => {
      const expectedStatusCode = 500;
      const error = new CustomError("", null, "");
      generalError(error, null, res as Response, () => {});

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });

  describe("When it's invoked with an empty message", () => {
    test("Then it should call its method json with the deafult message 'Something went wrong'", () => {
      const publicMessage = "Something went wrong";
      const error = new CustomError("", 500, null);
      const expectedPublicMessage = { error: publicMessage };

      generalError(error, null, res as Response, () => {});

      expect(res.json).toHaveBeenCalledWith(expectedPublicMessage);
    });
  });
});
