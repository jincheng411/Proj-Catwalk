
import React from "react";
import ProductDetail from './ProductDetail/ProductDetail';
import RelatedProductsAndOutfits from './RelatedPoductsAndOutfit.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: {},
      currentProductId: null
    }
  }

  componentDidMount() {
    let productId = '37313';
    axios.get(`/api/products/${productId}`).then(({ data }) => {
      this.setState({
        currentProduct: data,
        currentProductId: data.id
      })
    })
    axios.get('/api/products').then(({data}) => {
      this.setState({
        products: data
      })
    })
  }

  setProduct(req) {
    // well.. this will be more of an event handler. Can pinpoint to a an aleady existing product from our state, rather than continuously 'getting'
  }

  render() {
    //console.log(this.state)
    const { name } = this.props;
    const {currentProduct, currentProductId, products} = this.state;

    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <ProductDetail currentProduct={currentProduct} />
        <br></br>
        <RelatedProductsAndOutfits currentProduct={currentProduct} products={products} currentProductId={currentProductId}/>
      </>
    );
  }
}

export default App;

