
import React from "react";
import ProductDetail from './ProductDetail/ProductDetail';

class App extends React.Component {
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
