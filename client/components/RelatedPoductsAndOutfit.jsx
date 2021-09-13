import React from 'react';
import axios from 'axios';

class RelatedProductsAndOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      relatedProducts: [],
      currentProductId: this.props.currentProductId,
      allProducts: this.props.products
    }
  }
  componentDidMount() {
    this.setState({
      currentProductId: this.props.currentProductId,
      allProducts: this.props.products
    })
  }

  getAndSetRelated() {
    axios.get(`/api/products/${this.state.currentProductId}/related`)
  }

  render () {
    console.log('PROPS --> ', this.props)
    console.log('STATE--> ', this.state)
    return (
      <div>
        <h1>Related Products Main Component</h1>
      </div>
    )
  }
}

export default RelatedProductsAndOutfits;