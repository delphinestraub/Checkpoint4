const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./uploads/productpictures/");
  },
  filename: (req, file, callBack) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callBack(null, `${name + Date.now()}.${extension}`);
  },
});

module.exports = multer({ storage }).single("productImage");
