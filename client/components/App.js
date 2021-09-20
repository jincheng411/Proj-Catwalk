
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
      favoritedMain: false
    }
    this.handleRelatedProductsClick = this.handleRelatedProductsClick.bind(this)
    this.handleAddMainAsFavorite = this.handleAddMainAsFavorite.bind(this)
  }

  componentDidMount() {
    const productId = '37313';
    axios.get('/api/products').then((products) => {
      axios.get(`/api/products/${productId}`).then(( product ) => {
        this.setState({
          currentProduct: product.data,
          currentProductId: product.data.id,
          products: products.data,
          favoritedMain: false
        })
      })
    })
  }
  handleAddMainAsFavorite() {
    console.log('hitttt')
    this.setState({favoritedMain: true})
  }

  handleRelatedProductsClick(id) {
    axios.get(`/api/products/${id}`)
    .then(product => {
      this.setState({
        currentProduct: product.data,
        currentProductId: product.data.id
      });
    })
  }

  render() {
    const { name } = this.props;
    const { currentProduct, currentProductId, products, favoritedMain} = this.state;
    console.log(favoritedMain)
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <ProductDetail currentProduct={currentProduct} handleAddMainAsFavorite={this.handleAddMainAsFavorite}  />
        <br></br>
        <RelatedProductsAndOutfits currentProduct={currentProduct} products={products} currentProductId={currentProductId} handleRelatedProductsClick={this.handleRelatedProductsClick} favoritedMain={favoritedMain}/>
        <br></br>
        {/* <ReviewsCore currentProductId={currentProductId} reviewList={this.state.reviews} /> */}
      </>
    );
  }
}

export default App;

