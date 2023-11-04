import { http_status } from "@/config/constants/http-status";
import { NextFunction, Request, Response } from "express";
import Validator from "validatorjs";

export default function makeValidator(rules: Record<string, any>) {
  return function validator(req: Request, res: Response, next: NextFunction) {
    try {
      const data = { ...req.body, ...req.params, ...req.query };
      const validation = new Validator(data, rules);

      if (validation.passes()) {
        return next();
      }

      const errors = validation.errors.all();

      res.status(http_status.BAD_REQUEST).json(errors);
    } catch (error) {
      console.error(error);
      res.status(http_status.INTERNAL_SERVER_ERROR).json(error);
    }
  };
}
