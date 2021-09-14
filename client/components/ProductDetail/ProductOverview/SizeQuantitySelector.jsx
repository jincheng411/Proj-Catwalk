import React, {useState} from 'react';
import _ from 'underscore';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';

function SizeQuantitySelector({ style }) {
  const [inventory, setInventory] = useState(1);
  function updateInventory(num) {
    setInventory(num);
  }
  function updateQuantity(num) {
    console.log(`seleted ${num} items`)
  }
  return (
    <div className="selector">
      <SizeSelector style={style} updateInventory={updateInventory}/>
      <QuantitySelector inventory={inventory} updateQuantity={updateQuantity}/>
    </div>
  )
}

export default SizeQuantitySelector;