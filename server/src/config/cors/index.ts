import CORS from "cors";

const whitelist = ["http://localhost:8082"];

const cors_options_delegate = function (req: any, callback: Function) {
  let cors_options: { [key: string]: any };

  if (whitelist.includes(req.header("Origin"))) {
    cors_options = { origin: true, credentials: true };
  } else {
    cors_options = { origin: false };
  }
  callback(null, cors_options);
};

const cors = CORS(cors_options_delegate);

export { cors };
