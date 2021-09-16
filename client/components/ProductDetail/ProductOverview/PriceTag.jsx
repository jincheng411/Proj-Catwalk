import React from 'react';

function PriceTag({ style }) {
  return (
    <div className="product-overview-price-tag">
      {style.sale_price ?
      <div className="on-sale">
        <div>$ {style.sale_price}</div>
        <div>$ {style.original_price}</div>
      </div>
        :
        <div>$ {style.original_price}</div>}
    </div>
  )
}

export default PriceTag;