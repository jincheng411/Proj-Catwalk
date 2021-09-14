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
  this.setProductsShown = this.setProductsShown.bind(this)
  this.handleClickRight = this.handleClickRight.bind(this)
  this.handleClickLeft = this.handleClickLeft.bind(this)
}

componentDidUpdate(prevProps) {
  if (prevProps.relatedProducts !== this.props.relatedProducts && this.props.relatedProducts.name !== 'Error') {
    this.setProductsShown();
  }
}

setProductsShown() {
  this.setState({
    productsShown: this.props.relatedProducts.slice(0, 4),
    hiddenRight: this.props.relatedProducts.slice(4)
  })
}
handleClickRight() {
  if(this.state.hiddenRight.length !== 0) {
  var updatedProductsShown = this.state.productsShown;
  var productToHide = updatedProductsShown.shift();
  var updatedHiddenRight = this.state.hiddenRight;
  var productToShow = updatedHiddenRight.shift();
  var updatedHiddenLeft = this.state.hiddenLeft;
  updatedHiddenLeft.push(productToHide);
  updatedProductsShown.push(productToShow);
console.log(updatedHiddenLeft, updatedHiddenRight)
  this.setState({
    productsShown: updatedProductsShown,
    hiddenLeft: updatedHiddenLeft,
    hiddenRight: updatedHiddenRight
  })
} else {
  alert('No more Related Products')
}
}

handleClickLeft() {
  if(this.state.hiddenLeft.length !== 0) {
  var updatedProductsShown = this.state.productsShown;
  var productToHide = updatedProductsShown.pop();
  var updatedHiddenLeft = this.state.hiddenLeft;
  var productToShow = updatedHiddenLeft.pop();
  var updatedHiddenRight = this.state.hiddenRight;
  updatedHiddenRight.unshift(productToHide);
  updatedProductsShown.unshift(productToShow); //? push appends to end. Want it at front
console.log( updatedProductsShown , productToHide, updatedHiddenLeft, productToShow)
  this.setState({
    productsShown: updatedProductsShown,
    hiddenLeft: updatedHiddenLeft,
    hiddenRight: updatedHiddenRight
  })
} else {
  alert('No more Related Products')
}
}

render() {
  const {currentProduct, currentProductId, products, relatedProducts} = this.props;
  const {productsShown} = this.state;

  console.log('STATE--> ', this.state, 'PROPS -->', this.props)
  return (
    <div className = "related-products-car">
      <h2> Related sub</h2>
      <button onClick={this.handleClickRight}>Next</button>
      <button onClick={this.handleClickLeft}>PREV</button>
      {productsShown.map(relatedProduct => <Product key={relatedProduct} relatedProduct={relatedProduct} currentProductId={currentProductId} products={products} currentProduct={currentProduct} />)}


    </div>
  )
}
}

export default RelatedProducts;