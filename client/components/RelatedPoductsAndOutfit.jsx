import React from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProductsAndOutfits/RelatedProducts.jsx'
import OutfitList from './RelatedProductsAndOutfits/YourOutfits.jsx';
class RelatedProductsAndOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      relatedProducts: [],
      yourOutfitList: [],
      currentInOutfitList: false,
    }
    this.addOutfit = this.addOutfit.bind(this)
    this.getAndSetRelated = this.getAndSetRelated.bind(this)
    this.handleRender = this.handleRender.bind(this)
    this.removeOutfit = this.removeOutfit.bind(this)
  }
  componentDidMount() {
    console.log('yeah yup')
    this.getAndSetRelated()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentProductId !== this.props.currentProductId && this.props.currentProductId !== null) {
      this.getAndSetRelated()
    }
    console.log(sessionStorage)
  }

  getAndSetRelated() {
      axios.get(`/api/products/${this.props.currentProductId}/related`)
      .then(({ data }) => {
        this.setState({relatedProducts: data})
      })
    }

  handleRender(id) {
    //? going to go to click functionality for each product Card along with Outfit
    // ! Come back to! Switch gears to getting outfit rendered
    //! NON TESTED
    this.props.handleRelatedProductsClick(id);
    var isCurrentInOutfit = function () {
      if (this.state.yourOutfitList.indexOf(id) !== -1) {
        return true
      } else {
        return false
      }
    }
    this.setState({
      currentProductId: id,
      currentInOutfitList: isCurrentInOutfit
    })
    // this.getAndSetRelated();
    axios.get(`/api/products/${this.props.currentProductId}/related`)
      .then(({ data }) => {
        this.setState({relatedProducts: data})
      })
  }
  // Add and remove Oufit to List functions. Apply these functions to button
  //? In outfit component, handle carasaul and indiv outift item like product card.
  addOutfit() {
    var toAddToOutfitStorage = this.props.currentProductId
    var outfitList = this.state.yourOutfitList
    if (this.state.yourOutfitList.indexOf(this.props.currentProductId) === -1) {
      outfitList.unshift(toAddToOutfitStorage);
      this.setState({
        yourOutfitList: outfitList,
        currentInOutfitList: true
      });
    sessionStorage.setItem('yourOutfits', toAddToOutfitStorage);
    // SETTING AN ID
    } else {
      console.log('Product Already In your Outfits')
    }
    console.log('Updated Storage--> ', sessionStorage)
  }

  removeOutfit() {
    var toRemoveFromOutfitStorage = this.props.currentProductId
    var outfitList = this.state.yourOutfitList
    var index = outfitList.indexOf(toRemoveFromOutfitStorage)
    outfitList.splice(index, 1);
    this.setState({
      yourOutfitList: outfitList,
      currentInOutfitList: false
    });
    sessionStorage.removeItem('yourOutfits', toRemoveFromOutfitStorage);
    console.log('Updated Storage--> ', sessionStorage)
  }



  render () {
    // console.log('PROPS --> ', this.props)
    // console.log('STATE--> ', this.state)
    const {currentProduct, currentProductId, products} = this.props;
    const {relatedProducts} = this.state;

    return (
      <div className="related-products">
        <h1 className="related-products-header">Related Products Main Component</h1>
        <RelatedProducts relatedProducts={relatedProducts} currentProductId={currentProductId} products={products} currentProduct={currentProduct} addOutfit={this.addOutfit} />
      </div>
    )
  }
}

export default RelatedProductsAndOutfits;