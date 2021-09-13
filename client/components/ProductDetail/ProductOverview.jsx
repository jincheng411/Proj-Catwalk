import React from 'react';

function ProductOverview({product, styles}) {
  return (
    <div>
      <p>{product.category}</p>
      <h2>{product.name}</h2>
      <p>$ {product.default_price}</p>
      {/* <select>
        <option value="disabled">SIZE</option>
        {styles && styles[0].skus.map((sku) => {

        })}
      </select> */}
    </div>
  )
}

export default ProductOverview;