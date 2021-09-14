import React from 'react';
import _ from 'underscore';

function SizeSelector({ style }) {
  return (
    <div className="size-selector">
      <select>
        <option value="disabled">SIZE</option>
        {!_.isEmpty(style) && _.map(style.skus, (key, value) => {
          return <option>{key.size}</option>
        })
        }
      </select>
    </div>
  )
}

export default SizeSelector;