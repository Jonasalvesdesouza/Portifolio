import multer, { Options } from "multer";
import path from "path";

const storageOptions: Options = {
  storage: multer.diskStorage({
    destination: path.join(__dirname, "..", "..", "uploads"),
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 15 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ["png", "jpeg", "jpg", "gif", "svg"];
    const fileExtension = path
      .extname(file.originalname)
      .toLowerCase()
      .slice(1);

    if (!allowedExtensions.includes(fileExtension)) {
      return cb(null, false);
    }

    cb(null, true);
  },
};

export default storageOptions;
