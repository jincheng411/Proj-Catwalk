
import React from "react";
import ProductDetail from './ProductDetail';
import RelatedProductsAndOutfits from './RelatedPoductsAndOutfit.jsx';
import ReviewsCore from './ReviewsCore.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: {},
      currentProductId: null,
      favoritedMain: false,
    }
    this.handleRelatedProductsClick = this.handleRelatedProductsClick.bind(this)
    this.handleAddMainAsFavorite = this.handleAddMainAsFavorite.bind(this)
  }

  componentDidMount() {
    const productId = '37313';
    axios.get('/api/products').then((products) => {
      axios.get(`/api/products/${productId}`).then((product) => {
        this.setState({
          currentProduct: product.data,
          currentProductId: product.data.id,
          products: products.data,
        })
      })
    })
    if(sessionStorage.yourOutfits && sessionStorage.yourOutfits.split(',').includes(this.state.currentProductId+'')) {
      this.setState({
        favoritedMain: true
      })
    } else {
      this.setState({
        favoritedMain: false
      })
    }
  }
//   componentDidUpdate(prevState) {
//     if(prevProps.currentProduct !== this.state.currentProduct && sessionStorage.yourOutfits && sessionStorage.yourOutfits.split(',').includes(this.state.currentProductId+'')) {
//       console.log(prevProps)
//       this.setState({favoritedMain: true})
//   }
// }

  handleAddMainAsFavorite(bool) {
    this.setState({favoritedMain: bool})
  }

  handleRelatedProductsClick(id) {
    axios.get(`/api/products/${id}`)
    .then(product => {
      this.setState({
        currentProduct: product.data,
        currentProductId: product.data.id,
        favoritedMain: false
      });
    })
  }

  render() {
    const { currentProduct, currentProductId, products, favoritedMain} = this.state;
    console.log('APP STATE FAVE MAIN', favoritedMain)
    return (
      <>
        <ProductDetail favoritedMain={favoritedMain} currentProduct={currentProduct} handleAddMainAsFavorite={this.handleAddMainAsFavorite} />
        <br></br>
        <RelatedProductsAndOutfits currentProduct={currentProduct} products={products} currentProductId={currentProductId} handleRelatedProductsClick={this.handleRelatedProductsClick} favoritedMain={favoritedMain}/>
        <br></br>
        {/* <ReviewsCore currentProductId={currentProductId} reviewList={this.state.reviews} /> */}
      </>
    );
  }
}

export default App;

