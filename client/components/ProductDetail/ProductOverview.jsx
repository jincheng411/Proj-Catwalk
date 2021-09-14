import React, {useState} from 'react';
import StyleSelector from './StyleSelector';
import SizeQuantitySelector from './SizeQuantitySelector';
import _ from 'underscore';


function ProductOverview({product, styles, passToImageGallery, currentStyle}) {

  function handleChangeStyle(style) {

    passToImageGallery(style);
  }
  return (
    <div className="product-overview">
      <p>{product.category}</p>
      <h2>{product.name}</h2>
      {!_.isEmpty(currentStyle) ? <p>$ {currentStyle.name}</p> : <p>$ {product.default_price}</p>}

      <StyleSelector styles={styles} changeStyle={handleChangeStyle}/>
      <SizeQuantitySelector style={currentStyle}/>
    </div>
  )
}

export default ProductOverview;