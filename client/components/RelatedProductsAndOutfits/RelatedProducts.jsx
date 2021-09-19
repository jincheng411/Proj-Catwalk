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
    right: true,
  }
  this.setProductsShown = this.setProductsShown.bind(this)
  this.handleClickRight = this.handleClickRight.bind(this)
  this.handleClickLeft = this.handleClickLeft.bind(this)
  this.hideComponent = this.hideComponent.bind(this)
  this.handleShownButtons = this.handleShownButtons.bind(this)
}

componentDidUpdate(prevProps) {
  if (prevProps.relatedProducts !== this.props.relatedProducts && this.props.relatedProducts.name !== 'Error') {
    this.setProductsShown();
  }
}

setProductsShown() {
  if (this.props.relatedProducts.slice(4).length >= 1) {
    console.log(1)
    this.setState({
      productsShown: this.props.relatedProducts.slice(0, 4),
      hiddenRight: this.props.relatedProducts.slice(4),
      right: true
    })
  } else {
    console.log(2)
    this.setState({
      productsShown: this.props.relatedProducts.slice(0, 4),
      right: false
    })
  }

}

hideComponent(hidden) {
  switch(hidden) {
    case 'leftBtnHidden':
      this.setState({left: false, right: true})
      break;
    case 'rightBtnHidden':
    this.setState({left: true, right: false})
    break;
    case 'bothHidden':
      this.setState({left: false, right: false})
      break;
    case 'bothShown':
      this.setState({left: true, right: true})
      break;
      default:
        null;
  }
}
handleShownButtons() {
  if(this.state.hiddenRight.length !== 0 && this.state.hiddenLeft.length === 0) {
    this.hideComponent('leftBtnHidden')
  } else if (this.state.hiddenRight.length === 0 && this.state.hiddenLeft.length !== 0) {
    this.hideComponent('rightBtnHidden')
  } else if (this.state.hiddenRight.length === 0 && this.state.hiddenLeft.length === 0) {
    this.hideComponent('bothHidden')
} else if(this.state.hiddenRight.length !== 0 && this.state.hiddenLeft.length !== 0) {
  this.hideComponent('bothShown')
}
}

handleClickRight() {
  var updatedProductsShown = this.state.productsShown;
  var productToHide = updatedProductsShown.shift();
  var updatedHiddenRight = this.state.hiddenRight;
  var productToShow = updatedHiddenRight.shift();
  var updatedHiddenLeft = this.state.hiddenLeft;
  updatedHiddenLeft.push(productToHide);
  updatedProductsShown.push(productToShow);
  this.setState({
    productsShown: updatedProductsShown,
    hiddenLeft: updatedHiddenLeft,
    hiddenRight: updatedHiddenRight
  })
  this.handleShownButtons();
}

handleClickLeft() {

  var updatedProductsShown = this.state.productsShown;
  var productToHide = updatedProductsShown.pop();
  var updatedHiddenLeft = this.state.hiddenLeft;
  var productToShow = updatedHiddenLeft.pop();
  var updatedHiddenRight = this.state.hiddenRight;
  updatedHiddenRight.unshift(productToHide);
  updatedProductsShown.unshift(productToShow);
  this.setState({
    productsShown: updatedProductsShown,
    hiddenLeft: updatedHiddenLeft,
    hiddenRight: updatedHiddenRight
  })
  this.handleShownButtons();
}


render() {
  const {currentProduct, currentProductId, products, relatedProducts, addOutfit} = this.props;
  const {productsShown, left, right} = this.state;
  console.log('STATE---> ', this.state, 'PROPS --->', this.props)
  if (!left && right) {
    return (
      <div className = "related-products-car">
      <h2> Related sub</h2>
      <button onClick={this.handleClickRight}>Next</button>
      {productsShown.map(relatedProduct => <Product key={relatedProduct} relatedProduct={relatedProduct} currentProductId={currentProductId} products={products} currentProduct={currentProduct} addOutfit={addOutfit}/>)}
    </div>
  )}
  if (left && right) {
    return (
      <div className = "related-products-car">
      <h2> Related sub</h2>
      <button onClick={this.handleClickRight}>Next</button>
      <button onClick={this.handleClickLeft}>PREV</button>
      {productsShown.map(relatedProduct => <Product key={relatedProduct} relatedProduct={relatedProduct} currentProductId={currentProductId} products={products} currentProduct={currentProduct} addOutfit={addOutfit}/>)}
    </div>
  )}
if (left && !right) {
  return (
    <div className = "related-products-car">
    <h2> Related sub</h2>
    <button onClick={this.handleClickLeft}>PREV</button>
    {productsShown.map(relatedProduct => <Product key={relatedProduct} relatedProduct={relatedProduct} currentProductId={currentProductId} products={products} currentProduct={currentProduct} addOutfit={addOutfit}/>)}
  </div>
)}
if (!left && !right) {
  return (
    <div className = "related-products-car">
    <h2> Related sub</h2>
    {productsShown.map(relatedProduct => <Product key={relatedProduct} relatedProduct={relatedProduct} currentProductId={currentProductId} products={products} currentProduct={currentProduct} addOutfit={addOutfit}/>)}
  </div>
)}
}}

export default RelatedProducts;