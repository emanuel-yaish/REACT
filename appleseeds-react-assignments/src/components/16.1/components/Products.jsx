import React from "react";
import { Link } from "react-router-dom";
import { products } from "../products";

class Products extends React.Component {
  state = { products: [] };

  componentDidMount() {
    this.setState({ products });
  }

  render() {
    return (
      <div>
        {this.state.products.map((product) => (
          <div key={product.id}>
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/Productdetail/${product.id}`}
            >
              {product.title}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
