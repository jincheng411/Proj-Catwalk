import React from 'react';
import _ from 'underscore';

function SizeSelector({ style }) {
  return (
    <div className="selector">
      <select>
        <option value="disabled">SIZE</option>
        {!_.isEmpty(style) && _.map(style.skus, (value, key, sku) => {
          return <option key={key}>{value.size}</option>
        })
        }
      </select>
    </div>
  )
}

export default SizeSelector;