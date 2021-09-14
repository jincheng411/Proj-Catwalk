import React, {useState} from 'react';
import StyleSelector from './StyleSelector';
import SizeQuantitySelector from './SizeQuantitySelector';
import PriceTag from './PriceTag';
import _ from 'underscore';


function ProductOverview({product, styles, passToImageGallery, currentStyle}) {

  function handleChangeStyle(style) {
    passToImageGallery(style);
  }
  return (
    <div className="product-overview">
      <p>{product.category}</p>
      <h2>{product.name}</h2>
      <PriceTag defaultPrice={product.default_price} style={currentStyle}/>
      <StyleSelector styles={styles} changeStyle={handleChangeStyle}/>
      <SizeQuantitySelector style={currentStyle}/>
    </div>
  )
}

export default ProductOverview;