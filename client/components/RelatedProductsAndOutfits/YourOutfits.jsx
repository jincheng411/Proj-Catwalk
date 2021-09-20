import React from "react";
import Product from "./ProductCard";
class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsShown: [],
      hiddenLeft: [],
      hiddenRight: [],
      left: false,
      right: false,
      emptyOutfits: true
    }
    this.setProductsShown = this.setProductsShown.bind(this)
    this.handleClickRight = this.handleClickRight.bind(this)
    this.handleClickLeft = this.handleClickLeft.bind(this)
    this.hideComponent = this.hideComponent.bind(this)
    this.handleShownButtons = this.handleShownButtons.bind(this)
  }

  componentDidMount() {
    console.log('UPDATED')
    this.setProductsShown();
  }
  componentDidUpdate(prevProps) {
    if (this.props.yourOutfitList !== prevProps.yourOutfitList) {
      console.log('fsdahkajsdfhaksdlhf', this.props.yourOutfitList)
      this.setProductsShown();
    }
  }

  setProductsShown() {
    if(this.props.yourOutfitList.length !== 0) {

      if (this.props.yourOutfitList.slice(4).length >= 1) {
        this.setState({
          productsShown: this.props.yourOutfitList.slice(0, 4),
          hiddenRight: this.props.yourOutfitList.slice(4),
          right: true,
          emptyOutfits: false
        })
      } else {
        this.setState({
          productsShown: this.props.yourOutfitList.slice(0, 4),
          right: false,
          emptyOutfits: false
        })
      }
    } else {
      this.setState({
        productsShown:this.props.yourOutfitList,
        emptyOutfits: true
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

// pass to product card because it is set up the same exact way, except for the action button. Need a way to differentiate.
  render() {
    const {currentProduct, currentProductId, products, removeOutfit, handleRender} = this.props;
    const {productsShown, left, right} = this.state;
    if (!left && right && productsShown.length >= 1) {
      return (
        <div className = "related-products-car">
        <h2> Your Outfits</h2>
        <button onClick={this.handleClickRight}>Next</button>
        {productsShown.map(outfitId => <Product key={outfitId} inOutfitList={true} relatedProduct={outfitId} currentProductId={currentProductId} products={products} currentProduct={currentProduct} removeOutfit={removeOutfit} handleRender={handleRender} />)}
      </div>
    )}
    if (left && right && productsShown.length >= 1) {
      return (
        <div className = "related-products-car">
        <h2> Your Outfits</h2>
        <button onClick={this.handleClickRight}>Next</button>
        <button onClick={this.handleClickLeft}>PREV</button>
        {productsShown.map(outfitId => <Product key={outfitId} inOutfitList={true} relatedProduct={outfitId} currentProductId={currentProductId} products={products} currentProduct={currentProduct} removeOutfit={removeOutfit} handleRender={handleRender}/>)}
      </div>
    )}
  if (left && !right && productsShown.length >= 1) {
    return (
      <div className = "related-products-car">
      <h2> Your Outfits</h2>
      <button onClick={this.handleClickLeft}>PREV</button>
      {productsShown.map(outfitId => <Product key={outfitId} inOutfitList={true} relatedProduct={outfitId} currentProductId={currentProductId} products={products} currentProduct={currentProduct} removeOutfit={removeOutfit} handleRender={handleRender} />)}
    </div>
  )}
  if (!left && !right && productsShown.length >= 1) {
    return (
      <div className = "related-products-car">
      <h2> Your Outfits</h2>
      {productsShown.map(outfitId => <Product key={outfitId} inOutfitList={true} relatedProduct={outfitId} currentProductId={currentProductId} products={products} currentProduct={currentProduct} removeOutfit={removeOutfit} handleRender={handleRender} />)}
    </div>
  )}
  if(productsShown.length === 0) {
    return (
      <div className = "related-products-card">
        <div className="outfit-headers">

      <h2> Your Outfits</h2>
      <h1>Add Outfits to Save for Later</h1>
        </div>
      <Product emptyOutfits={this.state.emptyOutfits}/>
      </div>
    )
  }
  }}

  export default OutfitList;