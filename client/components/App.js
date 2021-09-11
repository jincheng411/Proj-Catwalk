
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
    axios.get('/api/products/37313').then(({data}) => {
      this.setState({
        currentProduct: data
      })
    })
  }
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <ProductDetail />
      </>
    );
  }
}

export default App;
