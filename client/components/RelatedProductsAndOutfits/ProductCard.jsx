import React from "react";
import axios from "axios";
import ProductImage from './ProductImage.jsx';
import StarRating from "./StarRating.jsx";

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      name: null,
      category: null,
      price: null,
      rating: 0
    }
    this.addRelatedProductToOutfit = this.addRelatedProductToOutfit.bind(this)
    this.removeOutfitCard = this.removeOutfitCard.bind(this)
    this.getAndSet =  this.getAndSet.bind(this)
    this.handleRenderCard = this.handleRenderCard.bind(this)
  }
  componentDidMount() {
    this.getAndSet();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.relatedProducts !== this.props.relatedProducts && this.props.relatedProducts.name !== 'Error') {
      this.getAndSet();
    }
  }

  getAndSet() {
    axios.get(`/api/products/${this.props.relatedProduct}`)
      .then(data => {
        this.setState({
          id: data.data.id,
          name: data.data.name,
          category: data.data.category,
          price: data.data.default_price,
          rating: 0,
          isOutfit: false
        })
        this.getRatings();
      })
      .catch(err => {
        console.log(err)
      })
  }
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
  render() {
    const {name, category, price, rating} = this.state;
    const {relatedProduct, inOutfitList} = this.props

    if(inOutfitList && this.state.id !== null) {
      return (
        <div className='product-card'>
           <div className="product-card-head" onClick={this.handleRenderCard}>
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{price}</p>
        <StarRating rating={rating} />
        <div/>
        </div>
        <button onClick={this.removeOutfitCard}>X</button>
        <ProductImage relatedProduct={relatedProduct}/>
      </div>
    )
    } else if(!inOutfitList && this.state.id !== null) {
      return (
        <div className='product-card'>
          <div className="product-card-head" onClick={this.handleRenderCard}>
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{price}</p>
        <StarRating rating={rating} />
        </div>
        <button onClick={this.addRelatedProductToOutfit}>Star</button>
        <ProductImage relatedProduct={relatedProduct}/>
      </div>
    )
  } else if (this.props.emptyOutfits === true || this.props.emptyOutfits === undefined) {
    // undefined because NaN gets plugged in
    return (
    <div className='product-card'>
      <h2>+</h2>
    </div>
    )
  }
}
}

export default Product;