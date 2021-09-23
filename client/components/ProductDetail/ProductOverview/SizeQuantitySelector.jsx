import React, {useState, useEffect} from 'react';
import _ from 'underscore';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';


function SizeQuantitySelector({ style, favoritedMain, addToBag, handleAddMainAsFavorite, currentProductId }) {
  const [inventory, setInventory] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const [sizeWarning, setSizeWarning] = useState(false);
  const [isFav, setIsFav] = useState(false);
  function updateInventory(inventory, size) {
    setInventory(inventory);
    setSize(size);
    setSizeWarning(false);
  }
  function updateQuantity(num) {
    console.log(`seleted ${num} items`)
    setQuantity(num);
  }
  function addToFav () {
    handleAddMainAsFavorite(!favoritedMain);
    setIsFav(!isFav);
  }

  function handleOnClick() {
    if(size) {
      addToBag({style, size, quantity});
    } else {
      setSizeWarning(true);
    }
  }

useEffect(()=> {
  if(favoritedMain) {
    setIsFav(false);
  }
})

  return (
    <div className="selector">
      <SizeSelector style={style} updateInventory={updateInventory} sizeWarning={sizeWarning}/>
      {/* <QuantitySelector inventory={inventory} updateQuantity={updateQuantity}/> */}
      <div className="selector-add-to-cart">
      <span onClick={handleOnClick}>ADD TO BAG</span>
      <span onClick={addToFav}>
        Favorite {isFav ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
      </span>
      </div>
    </div>
  )
}

export default SizeQuantitySelector;