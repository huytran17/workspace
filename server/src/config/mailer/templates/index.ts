import fs from "fs";

const default_data = {
  app_name: "Lookup",
};

const subjects = {
  "forget-password": `{{ app_name }}`,
};

const templates = {
  "forget-password": fs.readFileSync(
    `${__dirname}/html/forget-password`,
    "utf-8"
  ),
};

export { default_data, subjects, templates };
