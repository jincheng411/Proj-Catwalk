import React, {useState} from 'react';
import StyleSelector from './StyleSelector';
import SizeQuantitySelector from './SizeQuantitySelector';
import PriceTag from './PriceTag';
import _ from 'underscore';
import './ProductOverview.css'

function ProductOverview({product, styles, passToImageGallery, currentStyle, updateBag, handleAddMainAsFavorite}) {

  function handleChangeStyle(style) {
    passToImageGallery(style);
  }
  function addToBag(data) {
    updateBag({...data, productName: product.name})
  }
  return (
    <div className="product-overview">
      <p>{product.category}</p>
      <h2>{product.name}</h2>
      <p>{currentStyle.name}</p>
      <PriceTag defaultPrice={product.default_price} style={currentStyle}/>
      <StyleSelector styles={styles} currentStyleId={currentStyle.style_id} changeStyle={handleChangeStyle}/>
      <SizeQuantitySelector style={currentStyle} addToBag={addToBag} handleAddMainAsFavorite={handleAddMainAsFavorite}/>
    </div>
  )
}

export default ProductOverview;