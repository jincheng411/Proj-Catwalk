import React from 'react';
import axios from 'axios';
import ImageGallery from './ProductDetail/ImageGallery';
import ProductOverview from './ProductDetail/ProductOverview';
import Description from './ProductDetail/Description';
import './ProductDetail.css'

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      currentStyle: {}
    }
    this.passToImageGallery = this.passToImageGallery.bind(this);
  }
  componentDidUpdate() {
    if (this.state.styles.length === 0) {
      if (this.props.currentProduct) {
        const { id } = this.props.currentProduct
        console.log(id)
        axios.get(`/api/products/${id}/styles`).then(({ data }) => {
          this.setState({
            styles: data.results,
            currentStyle: data.results[0]
          })
        })
      }
    }
  }

  passToImageGallery(style) {
    this.setState({
      currentStyle: style
    })
  }

  render() {
    const { currentProduct } = this.props;
    const { styles, currentStyle } = this.state;
    return (
      <div className="product-detail">
        <div className="product-detail-row">
          <ImageGallery style={currentStyle}/>
          <ProductOverview product={currentProduct} styles={styles} passToImageGallery={this.passToImageGallery}/>
        </div>
        <Description product={currentProduct} features={currentProduct.features} />
      </div >
    )
  }
}

export default ProductDetail;