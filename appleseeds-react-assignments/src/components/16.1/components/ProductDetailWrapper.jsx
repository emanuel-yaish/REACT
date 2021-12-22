import React from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";

function ProductDetailWrapper(props) {
  const params = useParams();
  return (
    <div className="">
      <ProductDetail id={params.id} />
    </div>
  );
}

export default ProductDetailWrapper;
