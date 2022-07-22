const AbstractManager = require("./AbstractManager");

class ProductsManager extends AbstractManager {
  static table = "products";

  find(id) {
    return this.connection.query(
      `select products.*, cat.name AS category_name, a.name AS artisan_name from ${ProductsManager.table} where products.id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `select products.*, cat.name AS category_name, a.name AS artisan_name from ${ProductsManager.table}`
    );
  }

  insert(products, image) {
    return this.connection.query(
      `insert into ${ProductsManager.table} (name, artisan_id, picture, category_id, description, price) values (?, ?, ?, ?, ?, ?)`,
      [
        image,
        products.name,
        products.artisantId,
        products.picture,
        products.categoryId,
        products.description,
        products.price,
      ]
    );
  }

  update(products) {
    return this.connection.query(
      `update ${ProductsManager.table} set name = ?, artisant_Id = ?, picture = ?, category_Id = ?, description = ?, price = ?, where id = ? `,
      [
        products.data.name,
        products.name.artsanId,
        products.data.picture,
        products.data.categoryId,
        products.data.description,
        products.data.price,
        parseInt(products.id, 10),
      ]
    );
  }
}

module.exports = ProductsManager;
