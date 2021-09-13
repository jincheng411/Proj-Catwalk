import React from 'react';
import axios from 'axios';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: []
    }
  }
  componentDidUpdate() {
    if (this.state.styles.length !== 0) {
      if (this.props.currentProduct) {
        const { id } = this.props.currentProduct
        console.log(id)
        axios(`/api/products/${id}/styles`).then(({data}) => {
          this.setState({
            styles: data
          })
        })
      }
    }
  }
  render() {
    const { currentProduct } = this.props;
    console.log(currentProduct)
    return (
      <div>
        <p>{currentProduct ? currentProduct.id : 'aaa'}</p>
      </div>
    )
  }
}

export default ProductDetail;