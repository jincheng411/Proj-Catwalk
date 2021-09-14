import React, {useState} from 'react';
import StyleSelector  from './StyleSelector';


function ProductOverview({product, styles, passToImageGallery}) {
  const [currentStyle, setCurrentStyle] = useState(styles[0]);

  function handleChangeStyle(style) {
    setCurrentStyle(style);
    passToImageGallery(style);
  }
  return (
    <div className="product-overview">
      <p>{product.category}</p>
      <h2>{product.name}</h2>
      {currentStyle && <p>$ {currentStyle.name}</p> ||<p>$ {product.default_price}</p>}

      <StyleSelector styles={styles} changeStyle={handleChangeStyle}/>
      {/* <select>
        <option value="disabled">SIZE</option>
        {styles && styles[0].skus.map((sku) => {

        })}
      </select> */}
    </div>
  )
}

export default ProductOverview;