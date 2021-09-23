import React from 'react';
import axios from 'axios';
import ImageGallery from './ProductDetail/ImageGallery/ImageGallery';
import ProductOverview from './ProductDetail/ProductOverview/ProductOverview';
import Description from './ProductDetail/Description/Description';
import Cart from './ProductDetail/Cart/Cart';
import NavBar from './ProductDetail/NavBar/NavBar';
import './ProductDetail.css';
import _ from 'underscore';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      currentStyle: {},
      cart: [],
      listVisible: false
    }
    this.passToImageGallery = this.passToImageGallery.bind(this);
    this.updateBag = this.updateBag.bind(this);
    this.makeVisible = this.makeVisible.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentProduct !== this.props.currentProduct || this.state.styles.length === 0) {
      if (this.props.currentProduct) {
        const { id } = this.props.currentProduct
        axios.get(`/api/products/${id}/styles`).then(({ data }) => {
          this.setState({
            styles: data.results,
            currentStyle: data.results[0],
          })
        })
      }
    }
  }

  componentDidMount() {
    if (sessionStorage.cart){
      this.setState({cart: JSON.parse(sessionStorage.cart)})
    }
  }

  passToImageGallery(style) {
    this.setState({
      currentStyle: style
    })
  }

  updateBag(data) {
    const { cart, itemCount } = this.state;
    const isExist = cart.filter(item => (
      item.style.style_id === data.style.style_id &&
      item.size === data.size
    )).length > 0
    if (_.isEmpty(cart) || !isExist) {
      sessionStorage.setItem('cart', JSON.stringify(cart))
      this.setState({
        cart: cart.concat(data),
      })
    } else {
      const newState = cart.map((item) => {
        if (item.style.style_id === data.style.style_id && item.size === data.size) {
          return { ...item, quantity: Number(item.quantity) + Number(data.quantity) }
        } else {
          return item;
        }
      });
      sessionStorage.setItem('cart', JSON.stringify(newState))
      this.setState({ cart: newState });
    }
  }

  makeVisible(bool) {
    this.setState({listVisible: bool});
  }

  render() {
    const { currentProduct, favoritedMain,handleAddMainAsFavorite } = this.props;
    const { styles, currentStyle, cart, listVisible } = this.state;
    return (
      <div className="product-detail">
        <Cart items={cart} visible={listVisible}/>
        <NavBar cart={cart} makeVisible={this.makeVisible}/>
        <div className="product-detail-content">
          <div className="product-detail-col">
            <ImageGallery style={currentStyle} />
            <Description product={currentProduct} features={currentProduct.features} />
          </div>
          <ProductOverview
            favoritedMain={favoritedMain}
            product={currentProduct}
            currentStyle={currentStyle}
            styles={styles}
            passToImageGallery={this.passToImageGallery}
            updateBag={this.updateBag}
            handleAddMainAsFavorite={handleAddMainAsFavorite}
          />
        </div>
      </div>
    )
  }
}

export default ProductDetail;