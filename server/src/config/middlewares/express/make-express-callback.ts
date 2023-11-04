import { Request, Response, NextFunction } from "express";
import { http_status } from "@/config/constants/http-status";

export default function makeExpressCallback(controller: Function) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const httpRequest = {
        validated: { ...req.body, ...req.params, ...req.query },
        user: req.user,
        files: req.files,
      };

      const result = await controller(httpRequest);

      res.status(http_status.OK).json(result);

      next();
    } catch (error) {
      console.error(error);
      res.status(http_status.INTERNAL_SERVER_ERROR).json(error);
    }
  };
}
