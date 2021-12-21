import React from "react";
import { products } from "../products";

class ProductDetail extends React.Component {
  state = { products: [] };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchData(id);
    this.setState({ products });
  }

  fetchData = (id) => {
    const product = products.find((product) => product.id === id);
    this.setState({ product });
  };

  render() {
    return (
      <div>
        <h2>{this.product.title}</h2>
        <div>
          <img alt={this.product.title} src={this.product.imageUrl} />
        </div>
        <div>
          <span>{this.product.price}</span>
          <span>{this.product.size}</span>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
