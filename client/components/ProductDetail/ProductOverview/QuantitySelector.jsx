import React from 'react';
import _ from 'underscore';

function QuantitySelector({ inventory, updateQuantity }) {
  const qArr = [];
  for (let i = 0; i < Number(inventory); i++) {
    qArr[i] = i + 1;
  }
  function getQuantity(e) {
    updateQuantity(e.target.value);
  }
  return (
    <div className="selector">
      <select onChange={getQuantity}>
        {/* <option selected>11</option> */}
        {qArr.map((num) => {
          return <option key={num}>{num}</option>
        })}
      </select>
    </div>
  )
}

export default QuantitySelector;