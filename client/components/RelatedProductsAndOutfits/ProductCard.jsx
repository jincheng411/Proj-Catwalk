import React from "react";
import axios from "axios";

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null,
    }
  }
  componentDidMount() {
    axios.get(`/api/products/${this.props.relatedProduct}/styles`)
    .then((data) => {
      var image = this.state.image;
      console.log(data)
      var dataResults = data.data.results;
      dataResults.forEach(style => {
        if (image === null) {
          image = style.photos[0].url;
        }
        this.setState({image: image})
    })
    });
    }

  render() {
    console.log('PRODUCT props', this.state)
    //console.log(`products/${this.props.relatedProduct}/styles`)
    return (
      <div>
        <h3>Single Product Card</h3>
        <img className="product-card-image" src={this.state.image}></img>
      </div>
    )
  }
}
export default Product;