import React, {useState} from 'react';
import _ from 'underscore';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';

function SizeQuantitySelector({ style, addToBag }) {
  const [inventory, setInventory] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  function updateInventory(num) {
    setInventory(num);
    setSize(num);

  }
  function updateQuantity(num) {
    console.log(`seleted ${num} items`)
    setQuantity(num);
  }

  function handleOnClick() {
    if(size) {
      addToBag({style, size, quantity})
    } else {
      console.log('select a size first')
    }
  }

  return (
    <div className="selector">
      <SizeSelector style={style} updateInventory={updateInventory}/>
      <QuantitySelector inventory={inventory} updateQuantity={updateQuantity}/>
      <button onClick={handleOnClick}>ADD TO BAG</button>
    </div>
  )
}

export default SizeQuantitySelector;