
import React from "react";
import ProductDetail from './ProductDetail/ProductDetail';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {}
    }
  }

  componentDidMount() {
    let productId = '37313';
    axios.get(`/api/products/${productId}`).then(({ data }) => {
      this.setState({
        currentProduct: data
      })
    })
  }
  render() {
    const { name } = this.props;
    const { currentProduct } = this.state;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <ProductDetail currentProduct={currentProduct} />
      </>
    );
  }
}

export default App;
