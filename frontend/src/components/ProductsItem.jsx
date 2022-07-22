import PropTypes from "prop-types";

function ProductsItem({ products }) {
  const { name, description, price } = products;

  return (
    <div className="ProductsList">
      <div>
        <ul className="InlignProductsItems">
          <li> {name} </li>
          <li> {description} </li>
          <li> {price} </li>
        </ul>
      </div>
    </div>
  );
}

ProductsItem.propTypes = {
  products: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductsItem;
