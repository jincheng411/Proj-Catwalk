import React from "react";
import axios from "axios";
class ProductImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      image: null
    }
  }
  componentDidMount() {
    axios.get(`/api/products/${this.props.relatedProduct}/styles`)
    .then((data) => {
      var image = this.state.image;
      //console.log(data)
      //? difference between thumbnail url and url? I dont see one. What does 'default?' refers to.
      var dataResults = data.data.results;
      dataResults.forEach(style => {
        //console.log(style)
        if (style['default?'] === true ) {
          image = style.photos[0].thumbnail_url;
        }
        if (image === null) {
          image = style.photos[0].url;
        }
        if(style.photos[0].url === null) {
          image = 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
        }

        this.setState({image: image})
       })
    });
  }

  //https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg

  render() {
    //console.log('PRODUCT state', this.props)
    return (
      <div className='product-card-image-full'>
        <img className="product-card-image" src={this.state.image}></img>
      </div>
    )
  }
}
export default ProductImage;