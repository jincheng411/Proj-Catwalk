import React from "react";
import Product from "./ProductCard.jsx";
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
    this.setProductsShown();
  }
  componentDidUpdate(prevProps) {
    if (this.props.yourOutfitList !== prevProps.yourOutfitList) {
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

  render() {
    const {currentProduct, currentProductId, products, removeOutfit, handleRender} = this.props;
    const {productsShown, left, right} = this.state;
    if (!left && right && productsShown.length >= 1) {
      return (
        <div>
        <h2 className='carousal-header'> Your Outfits</h2>
        <div className = "related-products-car">
        {productsShown.map(outfitId => <Product key={outfitId} inOutfitList={true} relatedProduct={outfitId} currentProductId={currentProductId} products={products} currentProduct={currentProduct} removeOutfit={removeOutfit} handleRender={handleRender} />)}
        <button className = "carousal-next" onClick={this.handleClickRight}><i className="fas fa-arrow-right"></i></button>
      </div>
      </div>
    )}
    if (left && right && productsShown.length >= 1) {
      return (
        <div>
        <h2 className='carousal-header'> Your Outfits</h2>
        <div className = "related-products-car">
        <button  className = "carousal-prev" onClick={this.handleClickLeft}><i className="fas fa-arrow-left"></i></button>
        {productsShown.map(outfitId => <Product key={outfitId} inOutfitList={true} relatedProduct={outfitId} currentProductId={currentProductId} products={products} currentProduct={currentProduct} removeOutfit={removeOutfit} handleRender={handleRender}/>)}
        <button className = "carousal-next" onClick={this.handleClickRight}><i className="fas fa-arrow-right"></i></button>
      </div>
      </div>
    )}
  if (left && !right && productsShown.length >= 1) {
    return (
      <div>
        <h2 className='carousal-header'> Your Outfits</h2>
      <div className = "related-products-car">
      <button  className = "carousal-prev" onClick={this.handleClickLeft}><i className="fas fa-arrow-left"></i></button>
      {productsShown.map(outfitId => <Product key={outfitId} inOutfitList={true} relatedProduct={outfitId} currentProductId={currentProductId} products={products} currentProduct={currentProduct} removeOutfit={removeOutfit} handleRender={handleRender} />)}
    </div>
    </div>
  )}
  if (!left && !right && productsShown.length >= 1) {
    return (
      <div>
        <h2 className='carousal-header'> Your Outfits</h2>
      <div className = "related-products-car">
      {productsShown.map(outfitId => <Product key={outfitId} inOutfitList={true} relatedProduct={outfitId} currentProductId={currentProductId} products={products} currentProduct={currentProduct} removeOutfit={removeOutfit} handleRender={handleRender} />)}
    </div>
    </div>
  )}
  if(productsShown.length === 0) {
    return (
      <div className = "related-products-card">
        <div className="outfit-headers">

      <h2 className='outfit-header'> Your Outfits</h2>
      <h3 className='empty-outfit-header'>Add Outfits to Save for Later</h3>
        </div>
      <Product emptyOutfits={this.state.emptyOutfits}/>
      </div>
    )
  }
  }}

  export default OutfitList;