import multer from "multer";
import multerS3 from "multer-s3";
import { s3 } from "../aws-sdk";

const upload = multer({
  storage: multerS3({
    s3,
    bucket: "some-bucket",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: `${file.fieldname}_${Date.now().toString()}` });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

export { upload };
