import React from "react";
import axios from "axios";

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mama: true
    }
  }

  render() {
    return (
      <div>
        <h3>Single Product Card</h3>
      </div>
    )
  }
}
export default Product;