import React from 'react';
import axios from 'axios';
import Product from './ProductCard';
class RelatedProducts extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    relatedProducts: this.props.relatedProducts,
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
    this.setState({
      relatedProducts: this.props.relatedProducts
    })
  }
}

setProductsShown() {
  var relatedNoCopies = this.props.relatedProducts
  relatedNoCopies = relatedNoCopies.filter((id, index) => {
    return relatedNoCopies.indexOf(id) === index
  });
  if (relatedNoCopies.slice(4).length >= 1) {
    this.setState({
      productsShown: relatedNoCopies.slice(0, 4),
      hiddenRight: relatedNoCopies.slice(4),
      right: true
    })
  } else {
    this.setState({
      productsShown: relatedNoCopies.slice(0, 4),
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
  const {currentProduct, currentProductId, products, addOutfit, handleRender} = this.props;
  const {productsShown, left, right, relatedProducts} = this.state;
  // console.log('STATE---> ', this.state, 'PROPS --->', this.props)
  if (!left && right) {
    return (
      <div>
      <h2 className='carousal-header'> Related Products</h2>
      <div className = "related-products-car">
        {productsShown.map(relatedProduct => <Product key={relatedProduct} productsShown={productsShown} relatedProduct={relatedProduct} currentProductId={currentProductId}  relatedProductsList={relatedProducts} products={products} currentProduct={currentProduct} addOutfit={addOutfit} handleRender={handleRender}/>)}
        <button className = "carousal-next" onClick={this.handleClickRight}><i className="fas fa-arrow-right"></i></button>
      </div>
      </div>
  )}
  if (left && right) {
    return (
    <div>
    <h2 className='carousal-header'> Related Products</h2>
    <div className = "related-products-car">
    <button className = "carousal-prev" onClick={this.handleClickLeft}><i className="fas fa-arrow-left"></i></button>
      {productsShown.map(relatedProduct => <Product key={relatedProduct} productsShown={productsShown} relatedProduct={relatedProduct} currentProductId={currentProductId}  relatedProductsList={relatedProducts} products={products} currentProduct={currentProduct} addOutfit={addOutfit} handleRender={handleRender}/>)}
      <button className = "carousal-next" onClick={this.handleClickRight}><i className="fas fa-arrow-right"></i></button>
    </div>
    </div>
  )}
if (left && !right) {
  return (
    <div>
    <h2 className='carousal-header'> Related Products</h2>
    <div className = "related-products-car">
    <button className = "carousal-prev" onClick={this.handleClickLeft}><i className="fas fa-arrow-left"></i></button>
    {productsShown.map(relatedProduct => <Product key={relatedProduct} productsShown={productsShown} relatedProduct={relatedProduct} relatedProductsList={relatedProducts} currentProductId={currentProductId} products={products} currentProduct={currentProduct} addOutfit={addOutfit} handleRender={handleRender}/>)}
  </div>
  </div>
)}
if (!left && !right) {
  return (
    <div>
    <h2 className='carousal-header'> Related Products</h2>
    <div className = "related-products-car">
    {productsShown.map(relatedProduct => <Product key={relatedProduct} productsShown={productsShown} relatedProduct={relatedProduct} relatedProductsList={relatedProducts} currentProductId={currentProductId} products={products} currentProduct={currentProduct} addOutfit={addOutfit} handleRender={handleRender}/>)}
  </div>
  </div>
)}
}}

export default RelatedProducts;