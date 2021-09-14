import React from 'react';
import _ from 'underscore';
import SizeSelector from './SizeSelector';

function SizeQuantitySelector({ style }) {
  return (
    <div className="selector">
      <SizeSelector style={style} />
    </div>
  )
}

export default SizeQuantitySelector;