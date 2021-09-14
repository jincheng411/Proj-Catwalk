import React from 'react';
import _ from 'underscore';

function SizeSelector({ style, updateInventory }) {
  function getInventory(event) {
    updateInventory(event.target.value.split(',')[1]);
  }
  return (
    <div className="selector">
      <select onChange={getInventory} >
        <option value="disabled">SIZE</option>
        {!_.isEmpty(style) && _.map(style.skus, (value, key, sku) => {
          {console.log(style)}
          return <option key={key} value={[value.size, value.quantity]}>{value.size}</option>
        })
        }
      </select>
    </div>
  )
}

export default SizeSelector;