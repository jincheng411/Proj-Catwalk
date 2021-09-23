import React, { useState, useEffect } from 'react';
import _ from 'underscore';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';


function SizeQuantitySelector({ style, addToBag, handleAddMainAsFavorite, currentProductId }) {
  const [inventory, setInventory] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const [sizeWarning, setSizeWarning] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);

  function updateInventory(inventory, size) {
    setInventory(inventory);
    setSize(size);
    setSizeWarning(false);
  }
  function updateQuantity(num) {
    console.log(`seleted ${num} items`)
    setQuantity(num);
  }
  function addToFav() {
    handleAddMainAsFavorite(!favoritedMain);
    // setIsFav(!isFav);
  }

  function handleOnClick() {
    if (size) {
      addToBag({ style, size, quantity });
      setBtnDisabled(true);
      setTimeout(() => setBtnDisabled(false), 1200)
    } else {
      setSizeWarning(true);
    }
  }

  return (
    <div className="selector">
      <SizeSelector style={style} updateInventory={updateInventory} sizeWarning={sizeWarning} />
      {/* <QuantitySelector inventory={inventory} updateQuantity={updateQuantity}/> */}
      <div className="selector-add-to-cart">
        <button
          onClick={handleOnClick}
          disabled={btnDisabled}
          id={btnDisabled ? "btnClicked" : null}>
          {btnDisabled ? <span id="loading"></span> : ''}
          ADD TO BAG</button>
        <button onClick={addToFav}>
          Favorite {isFav ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
        </button>
      </div>
    </div>
  )
}

export default SizeQuantitySelector;