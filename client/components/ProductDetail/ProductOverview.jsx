import React, {useState} from 'react';
import StyleSelector from './StyleSelector';
import SizeSelector from './SizeSelector';
import _ from 'underscore';


function ProductOverview({product, styles, passToImageGallery, currentStyle}) {
  // const [currentStyle, setCurrentStyle] = useState(styles[0]);

  function handleChangeStyle(style) {
    // setCurrentStyle(style);
    passToImageGallery(style);
  }
  return (
    <div className="product-overview">
      <p>{product.category}</p>
      <h2>{product.name}</h2>
      {!_.isEmpty(currentStyle) ? <p>$ {currentStyle.name}</p> : <p>$ {product.default_price}</p>}

      <StyleSelector styles={styles} changeStyle={handleChangeStyle}/>
      <SizeSelector style={currentStyle}/>
    </div>
  )
}

export default ProductOverview;