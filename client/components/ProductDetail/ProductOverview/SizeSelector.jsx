import React, { useState } from 'react';
import _ from 'underscore';

function SizeSelector({ style, updateInventory, sizeWarning }) {
  const [selectedSize, setSelectedSize] = useState(null);
  function handleOnClick(quantity, size) {
    updateInventory(quantity, size);
    setSelectedSize(size);
  }
  return (
    <div className="size-selector">
      <div>
        <p className={sizeWarning ? 'red-text' : null}>Select Size</p>
        <p>Size Guide </p>
      </div>
      <div className={sizeWarning ? 'red-border' : null}>
        {!_.isEmpty(style) && _.map(style.skus, (value, key, sku) => {
          return <span
            className={value.size === selectedSize ? 'selected' : null}
            key={key}
            onClick={() => { handleOnClick(value.quantity, value.size) }}>
            {/* value={[value.size, value.quantity]} */}
            {value.size}
          </span>
        })
        }
      </div>
      {sizeWarning && <span className="red-text">Please select a size </span>}
    </div>
  )
}

export default SizeSelector;