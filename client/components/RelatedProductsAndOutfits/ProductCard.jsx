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
      rating: null
    }
  }
  componentDidMount() {
    axios.get(`/api/products/${this.props.relatedProduct}`)
    .then(data => {
     // console.log('DATA-> ', data)
      this.setState({
      name: data.data.name,
      category: data.data.category,
      price: data.data.default_price
    })
    })
    .catch(err => {
      console.log(err)
    })
   this.getRatings();
  }
  getRatings() {
    axios.get(`/api/reviews/${this.props.relatedProduct}`)
    .then(data => {
      console.log('RATINGS DATA --> ', data)
    })
    .catch(err => {
      console.log(err)
    })
  }
/**
 * Product Category
Product Name
Price -
Star Rating (# of Reviews)


 */
  render() {
    const {name, category, price, rating} = this.state;
    return (
      <div className='product-card'>
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{price}</p>
        <StarRating/>
        <ProductImage relatedProduct={this.props.relatedProduct}/>
      </div>
    )
  }
}
export default Product;