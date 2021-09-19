import React from "react";
import axios from "axios";
import ProductImage from './ProductImage.jsx';
import StarRating from "./StarRating.jsx";

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      category: null,
      price: null,
      rating: 0
    }
  }
  componentDidMount() {
    axios.get(`/api/products/${this.props.relatedProduct}`)
    .then(data => {
      this.setState({
      name: data.data.name,
      category: data.data.category,
      price: data.data.default_price,
      rating: 0
    })
    this.getRatings();
    })
    .catch(err => {
      console.log(err)
    })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.relatedProducts !== this.props.relatedProducts && this.props.relatedProducts.name !== 'Error') {
      this.getRatings();
    }
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
      return (
        <div className='product-card'>
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{price}</p>
        <StarRating rating={rating} />
        <button onClick={this.props.addOutfit}>Star</button>
        <ProductImage relatedProduct={this.props.relatedProduct}/>
      </div>
    )
}
}

export default Product;