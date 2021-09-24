import React from "react";
import axios from "axios";
import ProductImage from './ProductImage.jsx';
import StarRating from "./StarRating.jsx";
import ComparisonModal from "./ComparisonModal.jsx";

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
        var arrOfReviews = data.data.results
        var reviewToTheDecimal = 0
        arrOfReviews.forEach(review => {
          reviewToTheDecimal += review.rating
        })
        reviewToTheDecimal = reviewToTheDecimal/arrOfReviews.length
        this.setState({rating: reviewToTheDecimal})
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
  // ? Our beautiful render
  render() {

    const {name, category, price, rating} = this.state;
    const {relatedProduct, inOutfitList} = this.props

    if(inOutfitList && this.state.id !== null) {
      return (
        <div className='product-card'>
           <div className="product-card-head">
             <div onClick={this.handleRenderCard}>
           <h3 className='product-card-name'>{name}</h3>
        <p className='product-card-category'>{category}</p>
        <p className='product-card-price'>$ {price}</p>
        <StarRating rating={rating} />
        <div/>
        </div>
        <span onClick={this.removeOutfitCard} className="remove-outfit"><i className="fas fa-minus-circle"></i></span>
        </div>
        <ProductImage relatedProduct={relatedProduct}/>
      </div>
    )
    } else if(!inOutfitList && this.state.id !== null) {
      return (
        <div className='product-card'>
          <div className="product-card-head">
            <div onClick={this.handleRenderCard}>
          <div className='compare-wrapper'>
        <div className='compare-modal-incard' onMouseOver={this.handleEnter} onMouseLeave={this.handleLeave} modal={this.state.modal}><i className="fas fa-scroll"></i></div>
        </div>
        <h3 className='product-card-name'>{name}</h3>
        <p className='product-card-category'>{category}</p>
        <p className='product-card-price'>$ {price}</p>
        </div>
        <StarRating rating={rating} />
        <span onClick={this.addRelatedProductToOutfit} className='heart-add'><i className="fas fa-heart"></i></span>
        </div>
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