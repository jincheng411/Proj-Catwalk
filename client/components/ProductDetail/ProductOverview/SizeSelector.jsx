import React, {useState} from 'react';
import _ from 'underscore';

function SizeSelector({ style, updateInventory }) {
  const [selectedSize, setSelectedSize] = useState(null);
  function handleOnClick(quantity, size) {
    updateInventory(quantity, size);
    setSelectedSize(size);
  }
  return (
    <div className="size-selector">
      {!_.isEmpty(style) && _.map(style.skus, (value, key, sku) => {
        return <span
        className={value.size===selectedSize ? 'selected' : ''}
        key={key}
        onClick={() => {handleOnClick(value.quantity, value.size)}}>
                   {/* value={[value.size, value.quantity]} */}
          {value.size}
          </span>
      })
      }

    </div>
  )
}

export default SizeSelector;