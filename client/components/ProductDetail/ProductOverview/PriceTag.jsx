import React from 'react';

function PriceTag({ style }) {
  return (
    <div>
      {style.sale_price ?
      <div><div style={{'text-decoration': 'line-through'}}>$ {style.original_price}</div><div style={{color: "red"}}>$ {style.sale_price}</div></div>
        :
        <div>$ {style.original_price}</div>}
    </div>
  )
}

export default PriceTag;