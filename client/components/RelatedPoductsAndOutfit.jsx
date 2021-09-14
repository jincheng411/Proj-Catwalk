import React from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProductsAndOutfits/RelatedProducts.jsx'
class RelatedProductsAndOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      relatedProducts: [],
    }
  }
  componentDidMount() {
    console.log('yeah yup')
    this.getAndSetRelated()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentProductId !== this.props.currentProductId && this.props.currentProductId !== null) {
      this.getAndSetRelated()
    }
  }

  getAndSetRelated() {
      axios.get(`/api/products/${this.props.currentProductId}/related`)
      .then(({ data }) => {
        console.log('id' , this.props.currentProductId)
        this.setState({relatedProducts: data})
      })
    }

  render () {
    // console.log('PROPS --> ', this.props)
    // console.log('STATE--> ', this.state)
    const {currentProduct, currentProductId, products} = this.props;
    const {relatedProducts} = this.state;
    return (
      <div className="related-products">
        <h1 className="related-products-header">Related Products Main Component</h1>
        <RelatedProducts relatedProducts={relatedProducts} currentProductId={currentProductId} products={products} currentProduct={currentProduct} />
      </div>
    )
  }
}

export default RelatedProductsAndOutfits;