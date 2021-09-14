import React from "react";
import axios from "axios";
import ProductImage from './ProductImage.jsx';

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
    }
  }
  componentDidMount() {
    axios.get(`/api/products/${this.props.relatedProduct}`)
    .then(data => {
      this.setState({name: data.data.name})
    })
  }

  render() {
    //console.log('PRODUCT state', this.props)
    return (
      <div className='product-card'>
        <h3>{this.state.name}</h3>
        <ProductImage relatedProduct={this.props.relatedProduct}/>
      </div>
    )
  }
}
export default Product;