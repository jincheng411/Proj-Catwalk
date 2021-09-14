import React from 'react';
import axios from 'axios';
import Product from './ProductCard';
class RelatedProducts extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    productsShown: [],
    hiddenLeft: [],
    hiddenRight: [],
    left: false,
    right: true
  }
}

render() {
  const {currentProduct, currentProductId, products, relatedProducts} = this.props;

  //console.log(this.props)
  return (
    <div className = "related-products-car">
      <h2> Related sub</h2>
      <Product relatedProducts={relatedProducts} currentProductId={currentProductId} products={products} currentProduct={currentProduct}></Product>
    </div>
  )
}
}

export default RelatedProducts;