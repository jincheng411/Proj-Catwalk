
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
      currentProductId: null
    }
    this.handleRelatedProductsClick = this.handleRelatedProductsClick.bind(this)
  }

  componentDidMount() {
    const productId = '37313';
    axios.get('/api/products').then((products) => {
      axios.get(`/api/products/${productId}`).then(( product ) => {
        this.setState({
          currentProduct: product.data,
          currentProductId: product.data.id,
          products: products.data
        })
      })
    })
  }

  // setProduct(productId) {
  //   axios.get(`/api/products/${productId}`).then(({ data }) => {
  //     this.setState({
  //       currentProduct: data,
  //       currentProductId: data.id
  //     })
  //   })
  // }
  handleRelatedProductsClick(id) {
    axios.get(`/api/products/${id}`)
    .then(product => {
      this.setState({
        currentProduct: product,
        currentProductId: product.id
      });
    })
  }

  render() {
    //console.log(this.state)
    const { name } = this.props;
    const { currentProduct, currentProductId, products } = this.state;

    return (
      <>
        <h1>
          Hello {name}
        </h1>
        {/* <ProductDetail currentProduct={currentProduct} /> */}
        <br></br>
        <RelatedProductsAndOutfits currentProduct={currentProduct} products={products} currentProductId={currentProductId}/>
        <br></br>
        {/* <ReviewsCore currentProductId={currentProductId} reviewList={this.state.reviews} /> */}
      </>
    );
  }
}

export default App;

