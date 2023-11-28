import { Request, Response, NextFunction, response } from "express";
import { http_status } from "@/config/constants/http-status";

export default function makeExpressCallback(controller: Function) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const httpRequest = {
        validated: { ...req.body, ...req.params, ...req.query },
        user: req.user,
        files: req.files,
        query: req.query,
        params: req.params,
        body: req.body,
        method: req.method,
        headers: {
          "Content-Type": req.get("Content-Type"),
          Referer: req.get("referer"),
          "User-Agent": req.get("User-Agent"),
        },
      };

      controller(httpRequest)
        .then((response: any) => {
          response.headers && res.set(response.headers);
          res.type("json");
          res.status(response.statusCode).send(response.body);
          next();
        })
        .catch((error: any) => {
          res.status(error.statusCode).send(error.body);
          next(JSON.stringify(error));
        });
    } catch (error) {
      console.error(JSON.stringify(error));
      res.status(http_status.INTERNAL_SERVER_ERROR).json(error);
    }
  };
}
