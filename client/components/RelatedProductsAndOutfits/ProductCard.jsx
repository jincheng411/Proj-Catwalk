import React from "react";
import axios from "axios";
import ProductImage from './ProductImage.jsx';
import StarRating from "./StarRating.jsx";
import ComparisonModal from "./ComparisonModal.jsx";
import { values } from "underscore";

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      name: null,
      category: null,
      price: null,
      rating: 0,
      currentProductFeatures: [],
      myProductFeatures: [],
      hover: false,
      modal: ''
    }
    this.addRelatedProductToOutfit = this.addRelatedProductToOutfit.bind(this)
    this.removeOutfitCard = this.removeOutfitCard.bind(this)
    this.getAndSet =  this.getAndSet.bind(this)
    this.handleRenderCard = this.handleRenderCard.bind(this)
    this.renderModal = this.renderModal.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }
  componentDidMount() {
    this.getAndSet();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.relatedProducts !== this.props.relatedProducts && this.props.relatedProducts.name !== 'Error') {
      this.getAndSet();
    }
  }
  // ? Comparison Modal
  renderModal() {
    return  <ComparisonModal currentProduct={this.props.currentProduct} myName={this.state.name} currentProductFeatures={this.state.currentProductFeatures} myProductFeatures={this.state.myProductFeatures} hover={this.state.hover}/>
  }
  handleEnter() {
    this.setState({hover: !this.state.hover, modal: this.renderModal()})
  }
  handleLeave() {
    this.setState({modal: ''})
  }

  //? Getting and Setting Related Products
  getAndSet() {
    axios.get(`/api/products/${this.props.relatedProduct}`)
      .then(data => {
        this.setState({
          id: data.data.id,
          name: data.data.name,
          category: data.data.category,
          price: data.data.default_price,
          rating: 0,
          currentProductFeatures: this.props.currentProduct.features,
          myProductFeatures: data.data.features
        })
        this.getRatings();
      })
      .catch(err => {
        console.log(err)
      })
  }
  // ? handle Outfits
  addRelatedProductToOutfit() {
    //HANDLES ONLY THE CURRENT OUTFIT ADD
    this.props.addOutfit(this.state.id)
  }
  removeOutfitCard(){
    this.props.removeOutfit(this.state.id)
  }
  handleRenderCard() {
    this.props.handleRender(this.state.id)
  }
 //? API call for Ratings (stars)
  getRatings() {
    axios.get(`/api/reviews/${this.props.relatedProduct}`)
    .then(data => {
      if (data.data.results.length === 0) {
        this.setState({rating: 100})
      } else {

        this.setState({rating: data.data.results[0].rating})
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
  // ? Our beautiful render
  render() {
    console.log(this)
    const {id, name, category, price, rating} = this.state;
    const {relatedProduct, inOutfitList, productsShown} = this.props
    console.log('products shown')
    //id={'id' + productsShown.indexOf(id)
    if(inOutfitList && this.state.id !== null) {
      return (
        <div className='product-card'>
           <div className="product-card-head" onClick={this.handleRenderCard}>
           <h3 className='product-card-name'>{name}</h3>
        <p className='product-card-category'>{category}</p>
        <p className='product-card-price'>$ {price}</p>
        <StarRating rating={rating} />
        <div/>
        </div>
        <span onClick={this.removeOutfitCard}><i className="fas fa-minus-circle"></i></span>
        <ProductImage relatedProduct={relatedProduct}/>
      </div>
    )
    } else if(!inOutfitList && this.state.id !== null) {
      return (
        <div className='product-card'>
          <div className="product-card-head" onClick={this.handleRenderCard}>
          <div className='compare-wrapper'>
        <div className='compare-modal-incard' onMouseOver={this.handleEnter} onMouseLeave={this.handleLeave} modal={this.state.modal}><i className="fas fa-scroll"></i></div>
        </div>
        <h3 className='product-card-name'>{name}</h3>
        <p className='product-card-category'>{category}</p>
        <p className='product-card-price'>$ {price}</p>
        <StarRating rating={rating} />
        </div>
        <span onClick={this.addRelatedProductToOutfit} className='star-add'><i className="fas fa-star"></i></span>
        <ProductImage className='product-card-images' relatedProduct={relatedProduct}/>
      <div>{this.state.modal}</div>
      </div>

    )
  } else if (this.props.emptyOutfits === true || this.props.emptyOutfits === undefined) {
    // undefined because NaN gets plugged in
    return (
    <div className='product-card-empty-outfits'>
      <h2 className='empty-outfit-plus'><i className="fas fa-plus-square"></i></h2>
    </div>
    )
  }
}
}

export default Product;