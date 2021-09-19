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
    this.updateStateAndRender = this.updateStateAndRender.bind(this)
  }
  componentDidMount() {
    console.log('yeah yup')
    this.getAndSetRelated()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentProductId !== this.props.currentProductId && this.props.currentProductId !== null) {
      this.getAndSetRelated();
      this.updateStateAndRender();
    }
  }
  updateStateAndRender() {
    if (sessionStorage.getItem('yourOutfits') !== null) {
      console.log('!!!!!!', sessionStorage.getItem('yourOutfits'))
      var storageIds = sessionStorage.getItem('yourOutfits')
      var outfitListStr = storageIds.split(',')
      var finalOutfitList = []
      outfitListStr.forEach(str => {
        var numVal = parseInt(str)
          finalOutfitList.push(numVal)
      })
      console.log(finalOutfitList)
      this.setState({
        yourOutfitList: finalOutfitList
      })
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
  addOutfit(id) {
    //HANDLES ONLY THE CURRENT OUTFIT ADD
    if (id) {
      //! HANDLES WHATS CLICKED IN PRODUCT CARD
      console.log(200)
      console.log('!!!!!!!', id)
      var toAddToOutfitStorage = id;
      var outfitList = this.state.yourOutfitList
      if (this.state.yourOutfitList.indexOf(id) === -1) {
        outfitList.unshift(toAddToOutfitStorage);
        this.setState({
          yourOutfitList: outfitList,
          currentInOutfitList: true
        });
      sessionStorage.setItem(`yourOutfits`, outfitList);
      // SETTING AN ID
      } else {
        console.log('Product Already In your Outfits')
      }
      console.log('Updated Storage--> ', sessionStorage)
    } else {
      //! HANDLES CURRENT PRODUCT
      console.log(100)
      var toAddToOutfitStorage = this.props.currentProductId
      var outfitList = this.state.yourOutfitList
      if (this.state.yourOutfitList.indexOf(this.props.currentProductId) === -1) {
        outfitList.unshift(toAddToOutfitStorage);
        this.setState({
          yourOutfitList: outfitList,
          currentInOutfitList: true
        });
        sessionStorage.setItem(`yourOutfits`, outfitList);
      } else {
        console.log('Product Already In your Outfits')
      }
      console.log('Updated Storage--> ', sessionStorage)
    }
  }

  removeOutfit(id) {
    var toRemoveFromOutfitStorage = id
    var outfitList = this.state.yourOutfitList
    var index = outfitList.indexOf(toRemoveFromOutfitStorage)
    outfitList.splice(index, 1);
    this.setState({
      yourOutfitList: outfitList,
    });
    sessionStorage.setItem('yourOutfits', outfitList);
    console.log('Updated Storage--> ', sessionStorage)
  }



  render () {
    // console.log('PROPS --> ', this.props)
    console.log('OUTFIT STATE--> ', this.state.yourOutfitList)
    const {currentProduct, currentProductId, products} = this.props;
    const {relatedProducts, yourOutfitList, currentInOutfitList} = this.state;

    return (
        <div>
      <div className="related-products">
        <h1 className="related-products-header">Related Products Main Component</h1>

        <RelatedProducts inOutfitList={currentInOutfitList} relatedProducts={relatedProducts} currentProductId={currentProductId} products={products} currentProduct={currentProduct} addOutfit={this.addOutfit} />
        <p></p>
        </div>
        <div className="outfit-main">
        <OutfitList inOutfitList={currentInOutfitList} removeOutfit={this.removeOutfit} yourOutfitList={yourOutfitList} currentInOutfitList={currentInOutfitList}/>
        </div>
      </div>
    )
  }
}

export default RelatedProductsAndOutfits;