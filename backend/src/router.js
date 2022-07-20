const express = require("express");
const upload = require("./middlewares/Multerconfig");

const { ProductsController } = require("./controllers");

const router = express.Router();

router.get("/products", ProductsController.browse);
router.get("/products/:id", ProductsController.read);
router.put("/products/:id", ProductsController.edit);
router.post("/products", upload, ProductsController.add);
router.delete("/products/:id", ProductsController.delete);

module.exports = router;
