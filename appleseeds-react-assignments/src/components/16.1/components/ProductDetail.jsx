import React from "react";
import { products } from "../products";

class ProductDetail extends React.Component {
  state = { product: null };
  componentDidMount() {
    this.findProduct(+this.props.id);
  }

  findProduct = (id) => {
    const product = products.find((product) => {
      if (product.id === id) return true;
      return false;
    });
    this.setState({ product });
  };

  render() {
    if (!this.state.product) return <div></div>;
    return (
      <div>
        <h2>{this.state.product.title}</h2>
        <div>
          <img alt={this.state.product.title} src={this.state.imageUrl} />
        </div>
        <div>
          <span>{this.state.product.price}</span>
          <span>{this.state.product.size}</span>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
