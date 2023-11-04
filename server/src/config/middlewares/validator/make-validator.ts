import { Request, Response, NextFunction } from "express";
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

      res.status(400).json(errors);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  };
}
