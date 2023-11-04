import { Request, Response, NextFunction } from "express";

export default function makeExpressCallback(controller: Function) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const httpRequest = {
        validated: { ...req.body, ...req.params, ...req.query },
        user: req.user,
        files: req.files,
      };

      const result = await controller(httpRequest);

      res.status(200).json(result);

      next();
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  };
}
