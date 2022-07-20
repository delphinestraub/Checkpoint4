const AbstractManager = require("./AbstractManager");

class ProductsManager extends AbstractManager {
  static table = "products";

  insert(products) {
    return this.connection.query(
      `insert into ${ProductsManager.table} (title) values (?)`,
      [products.title]
    );
  }

  update(products) {
    return this.connection.query(
      `update ${ProductsManager.table} set title = ? where id = ?`,
      [products.title, products.id]
    );
  }
}

module.exports = ProductsManager;
