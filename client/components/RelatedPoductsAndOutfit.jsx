import React from 'react';
import axios from 'axios';

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