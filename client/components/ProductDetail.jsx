import React from 'react';
import axios from 'axios';
import ImageGallery from './ProductDetail/ImageGallery';
import ProductOverview from './ProductDetail/ProductOverview';
import Description from './ProductDetail/Description';

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
        axios(`/api/products/${id}/styles`).then(({ data }) => {
          this.setState({
            styles: data.results
          })
        })
      }
    }
  }
  render() {
    const { currentProduct } = this.props;
    const { styles } = this.state;
    console.log(currentProduct)
    return (
      <div>
        <ImageGallery styles={styles} />
        <ProductOverview product={currentProduct} />
        <Description product={currentProduct} />
        < p > {currentProduct ? currentProduct.id : 'aaa'}</p>
      </div >
    )
  }
}

export default ProductDetail;