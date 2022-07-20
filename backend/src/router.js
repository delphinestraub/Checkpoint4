const express = require("express");

const { ProductsController } = require("./controllers");
const { ArtisanController } = require("./controllers");
const { CategoryController } = require("./controllers");

const router = express.Router();

router.get("/products", ProductsController.browse);
router.get("/products/:id", ProductsController.read);
router.put("/products/:id", ProductsController.edit);
router.post("/products", ProductsController.add);
router.delete("/products/:id", ProductsController.delete);

router.get("/artisan", ArtisanController.browse);
router.get("/artisan/:id", ArtisanController.read);
router.put("/artisan/:id", ArtisanController.edit);
router.post("/artisan", ArtisanController.add);
router.delete("/artisan/:id", ArtisanController.delete);

router.get("/category", CategoryController.browse);
router.get("/category/:id", CategoryController.read);
router.put("/category/:id", CategoryController.edit);
router.post("/category", CategoryController.add);
router.delete("/category/:id", CategoryController.delete);

module.exports = router;
