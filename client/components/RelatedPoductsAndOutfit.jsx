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
      var storageIds = sessionStorage.getItem('yourOutfits')
        var outfitListStr = storageIds.split(',')
        var finalOutfitList = []
        if (storageIds.length > 0) {
          outfitListStr.forEach(str => {
            var numVal = parseInt(str)
            finalOutfitList.push(numVal)
          })
        }
        this.setState({
          yourOutfitList: finalOutfitList
        })
    } else {
      var finalOutfitList = []
      this.setState({
        yourOutfitList: finalOutfitList
      })
    }
  }

  getAndSetRelated() {
      axios.get(`/api/products/${this.props.currentProductId}/related`)
      .then(({ data }) => {
        this.setState({relatedProducts: data})
      }).catch((err) => {
        console.log(err)
      })
      .catch(err => {
        console.log(err)
      })
    }

  handleRender(id) {
    this.props.handleRelatedProductsClick(id);
    var isCurrentInOutfit = function () {
      if (this.state.yourOutfitList.indexOf(id) !== -1) {
        return true
      } else {
        return false
      }
    }
    this.setState({
      currentInOutfitList: isCurrentInOutfit
    })
    // this.getAndSetRelated();
    axios.get(`/api/products/${this.props.currentProductId}/related`)
      .then(({ data }) => {
        this.setState({relatedProducts: data})
      })
      .catch(err => {
        console.log(err)
      })
  }
  // Add and remove Oufit to List functions. Apply these functions to button
  //? In outfit component, handle carasaul and indiv outift item like product card.
  addOutfit(id) {
    //HANDLES ONLY THE CURRENT OUTFIT ADD
    if (id) {
      //! HANDLES WHATS CLICKED IN PRODUCT CARD
      var toAddToOutfitStorage = id;
      var outfitList = this.state.yourOutfitList
      if (this.state.yourOutfitList.indexOf(id) === -1) {
      outfitList.unshift(toAddToOutfitStorage);
      sessionStorage.setItem(`yourOutfits`, outfitList);
      // SETTING AN ID
      } else {
        console.log('Product Already In your Outfits')
      }
      this.updateStateAndRender();
      console.log('Updated Storage--> ', sessionStorage)
    } else {
      //! HANDLES CURRENT PRODUCT
      console.log(100)
      var toAddToOutfitStorage = this.props.currentProductId
      var outfitList = this.state.yourOutfitList
      if (this.state.yourOutfitList.indexOf(this.props.currentProductId) === -1) {
        outfitList.unshift(toAddToOutfitStorage);
        sessionStorage.setItem(`yourOutfits`, outfitList);
      } else {
        console.log('Product Already In your Outfits')
      }
      this.updateStateAndRender();
      console.log('Updated Storage--> ', sessionStorage)
    }
  }

  removeOutfit(id) {
    if (this.state.yourOutfitList.length > 1) {
      var toRemoveFromOutfitStorage = id
      var outfitList = this.state.yourOutfitList
      var index = outfitList.indexOf(toRemoveFromOutfitStorage)
      outfitList.splice(index, 1);
      this.setState({
        yourOutfitList: outfitList,
      });
      sessionStorage.setItem('yourOutfits', outfitList);
      console.log('Updated Storage--> ', sessionStorage)
      this.updateStateAndRender();
    } else {
      sessionStorage.clear();
      console.log('sessionstorage post remove ', sessionStorage.getItem('yourOutfits'))
      this.updateStateAndRender();
    }
  }



  render () {
    const {currentProduct, currentProductId, products, handleRelatedProductsClick} = this.props;
    const {relatedProducts, yourOutfitList, currentInOutfitList} = this.state;

    return (
        <div>
      <div className="related-products">
        <h1 className="related-products-header">Related Products Main Component</h1>

        <RelatedProducts inOutfitList={currentInOutfitList} relatedProducts={relatedProducts} currentProductId={currentProductId} products={products} currentProduct={currentProduct} addOutfit={this.addOutfit} handleRender={this.handleRender} />
        <p></p>
        </div>
        <div className="outfit-main">
        <OutfitList inOutfitList={currentInOutfitList} removeOutfit={this.removeOutfit} yourOutfitList={yourOutfitList} currentInOutfitList={currentInOutfitList} handleRender={this.handleRender}/>
        </div>
      </div>
    )
  }
}

export default RelatedProductsAndOutfits;