const Joi = require("joi");
const models = require("../models");

class ProductsController {
  static browse = (req, res) => {
    models.products
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.products
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    let validationErrors = null;

    // TODO validations (length, format...)
    try {
      const rules = {
        name: Joi.string().max(100),
        artisanId: Joi.number().min(1).max(4),
        picture: Joi.string.max(255),
        categoryId: Joi.number.min(1).max(4),
        description: Joi.string(),
        price: Joi.number().min(0).max(100).precision(2),
      };
      validationErrors = Joi.object(rules).validate(
        {
          name: data.name,
          artisanId: data.artisanId,
          picture: data.picture,
          categoryId: data.categoryId,
          description: data.description,
          price: data.price,
        },

        { abortEarly: false }
      ).error;

      if (validationErrors) throw new Error("INVALID_DATA");

      models.products
        .update({ data, id })
        .then(([result]) => {
          if (result.affectedRows === 0) {
            res.sendStatus(404);
          } else {
            res.sendStatus(204);
          }
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } catch (err) {
      if (err.message === "INVALID_DATA") {
        res.status(422).json({ validationErrors });
      }
      res.status(500).send(err);
    }
  };

  static add = (req, res) => {
    const { name, artisanId, picture, categoryId, description, price } =
      req.body;
    const image = req.file.path;

    // TODO validations (length, format...)
    let validationErrors = null;

    try {
      const rules = {
        name: Joi.string().max(100),
        artisanId: Joi.number().min(1).max(4),
        picture: Joi.string.max(255),
        categoryId: Joi.number.min(1).max(4),
        description: Joi.string(),
        price: Joi.number().min(0).max(100).precision(2),
      };

      validationErrors = Joi.object(rules).validate(
        {
          name,
          artisanId,
          picture,
          categoryId,
          description,
          price,
        },

        { abortEarly: false }
      ).error;

      if (validationErrors) throw new Error("INVALID_DATA");

      models.products
        .insert({ name, artisanId, picture, categoryId, description, price })
        .then(([result]) => {
          res.status(201).send({
            name,
            artisanId,
            picture,
            categoryId,
            description,
            price,
            image,
            id: result.insertId,
          });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } catch (err) {
      if (err.message === "INVALID_DATA") {
        res.status(422).json({ validationErrors });
      }
      res.status(500).send("Unknown error during the add");
    }
  };

  static delete = (req, res) => {
    models.products
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProductsController;
